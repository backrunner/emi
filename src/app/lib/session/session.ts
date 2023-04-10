import { randomUUID } from 'node:crypto';

import { requestCompletions } from '@/app/api/openai';
import { getInitalPrompt } from '@/app/constants/prompt';
import { HISTORY_COLLECTION } from '@/app/constants/knowledge';
import type { ScoredPoint } from '@/app/proto/qdrant/qdrant/ScoredPoint';
import { ChatHistory } from '@/app/entities/ChatHistory';
import { Usage } from '@/app/entities/Usage';
import { Session } from '@/app/entities/Session';
import { computeKeywordOverlapScore, isRejectionSentence } from '@/app/utils/text';
import { getDataSource } from '@/app/data-source';
import type { ChatGPTMessage } from '@/types/openai';

import type { ClipClient } from '../grpc/clip-as-a-service';
import type { QdrantClient } from '../grpc/qdrant';
import { UsageManager } from '../usage/manager';

import { ChatSessionManager } from './manager';
import { SENTENCE_TENDENCY } from '@/app/constants/dicts';

interface InternalChatMessage extends ChatGPTMessage {
  id?: string;
  created?: number;
  persisted?: boolean;
  isInstruction?: boolean;
}

type InternalChatMessages = InternalChatMessage[];

interface HydrateOptions {
  isInstruction?: boolean;
}

export class ChatSession {
  public id: string = randomUUID();
  public startedAt: number = Math.floor(Date.now() / 1e3);
  public messages: InternalChatMessages = getInitalPrompt() as InternalChatMessages;

  public constructor() {
    this.createOnDatabase();
  }

  /**
   * Perform a chat action
   */
  public async chat(message: string) {
    console.debug('[session] receive chat request:', message);
    const wrappedMessage: ChatGPTMessage = {
      role: 'user',
      content: message,
    };
    // searching for history
    let searchRes;
    try {
      searchRes = await this.searchHistoryByVector(wrappedMessage);
    } catch (err) {
      console.error('[session] search history by vector failed:', err);
    }
    if (Array.isArray(searchRes) && searchRes.length) {
      try {
        const composedInjection = await this.composeInjection(searchRes, message);
        if (composedInjection) {
          this.messages.push(this.hydrateMessage(composedInjection, { isInstruction: true }));
        }
      } catch (err) {
        console.error('[session] compose injection failed:', err);
      }
    }
    // send to openai for completion
    let completeRes;
    let completed;
    try {
      completeRes = await requestCompletions([
        ...this.messages.map((message) => this.dehydrateMessage(message)),
        wrappedMessage,
      ]);
      completed = completeRes.message;
    } catch (err: any) {
      console.error('Failed to complete the chat content:', err);
      return {
        role: 'error',
        content: `${err?.message || 'Failed to get the chat response: unknown error.'}`,
      };
    }
    console.debug('[session] chat completed:', completed);
    if (!completed) {
      return;
    }
    const hydrated = [wrappedMessage, completed].map((message) => this.hydrateMessage(message));
    UsageManager.setChatUsage(hydrated[1].id, completeRes.usage);
    this.messages.push(...hydrated);
    // filter injected history instruction, reduce the affection on the future messages
    this.messages = this.messages.filter((message) => {
      if (message.role === 'system' && message.isInstruction) {
        return false;
      }
      return true;
    });
    // after a chat interaction completed, persist related messages
    this.persist().catch((err) => {
      console.error('[session] Failed to persist chat messages', err);
    });
    // hydrated[1] is the hydrated completed message
    return hydrated[1];
  }

  public async close() {
    // check if this session is useless
    if (
      this.messages.reduce((res, curr) => {
        return res || (!curr.isInstruction && curr.role !== 'system');
      }, false)
    ) {
      // there's a message that not instruction
      const endedAt = Math.floor(Date.now() / 1e3);
      await getDataSource()
        .createQueryBuilder()
        .update(Session)
        .set({ endedAt })
        .where('id = :id', { id: this.id })
        .execute();
    } else {
      await getDataSource().createQueryBuilder().delete().where('id = :id', { id: this.id }).execute();
    }
  }

  /**
   * Hydrate a raw message with internal id, created time...
   * @param message Raw message based on ChatGPT message structure
   * @returns Hydrated message
   */
  private hydrateMessage(message: ChatGPTMessage, options: HydrateOptions = {}) {
    return {
      ...message,
      created: Date.now(),
      id: randomUUID(),
      persisted: false,
      isInstruction: options.isInstruction ?? false,
    };
  }

  /**
   * Transform internal message structure to a ChatGPT accepted one
   * @param message the hydrated message with id, created time, ...
   * @returns ChatGPT api accepted message structure
   */
  private dehydrateMessage(message: InternalChatMessage) {
    return {
      role: message.role,
      content: message.content,
    };
  }

  /**
   * Searching a related message by vector
   * @param userMessage current user input
   */
  private async searchHistoryByVector(userMessage: InternalChatMessage): Promise<ScoredPoint[] | null> {
    return await Promise.race<[Promise<ScoredPoint[] | null>, Promise<null>]>([
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        if (!ChatSessionManager.grpcClients.clip) {
          reject(new Error('Cannot find available clip service client in session manager.'));
        }
        if (!ChatSessionManager.grpcClients.qdrant) {
          reject(new Error('Cannot find available qdrant service client in session manager.'));
        }
        const pointVector = await (ChatSessionManager.grpcClients.clip as ClipClient).encodeText(
          `${userMessage.content}`,
        );
        // searching in qdrant
        const searchRes = await (ChatSessionManager.grpcClients.qdrant as QdrantClient).searchPoints(
          HISTORY_COLLECTION,
          pointVector,
        );
        if (!searchRes) {
          resolve(null);
        }
        const sorted = searchRes
          ?.map((item) => ({
            ...item,
            score: Number(item.score),
          }))
          .filter((item) => !!item.score)
          .sort((a, b) => b.score - a.score);
        if (!sorted?.length) {
          resolve(null);
        } else {
          resolve(sorted);
        }
      }),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Searching timeout.'));
        }, 10 * 1000);
      }),
    ]);
  }

  private async composeInjection(points: ScoredPoint[], userInput: string) {
    let searchedTarget;
    try {
      searchedTarget = await getDataSource()
        .getRepository(ChatHistory)
        .createQueryBuilder()
        .where('uuid IN (:...uuid)', { uuid: points.filter((item) => !!item.id?.uuid).map((item) => item.id?.uuid) })
        .getMany();
    } catch (err) {
      console.error('[session] get searched history target by uuid failed:', err);
      return;
    }
    console.debug('[session] search history target:', searchedTarget);
    // no available results
    if (!Array.isArray(searchedTarget) || !searchedTarget?.length) {
      return;
    }
    // extract content and compare the keywords
    const searchedContent = searchedTarget.map((item) => item.content);
    // compute keyword overlap score
    const keywordOverlapScores = await computeKeywordOverlapScore(userInput, searchedContent);
    if (!Array.isArray(keywordOverlapScores) || !keywordOverlapScores) {
      return;
    }
    const [highestScoredOne] = keywordOverlapScores;
    console.debug('[session] get keyword overlap score:', highestScoredOne);
    if (!highestScoredOne?.[1]) {
      return;
    }
    const message: InternalChatMessage = {
      role: 'system',
      content: `相关的历史对话记录："【Emi：${highestScoredOne[0]}】"`,
    };
    return message;
  }

  /**
   * Persist all messages to database (both tensor search engine and sqlite for logging)
   */
  private async persist() {
    const persisted: string[] = [];
    // persist all messages to qdrant
    await Promise.allSettled([
      ...this.messages.map(async (message) => {
        if (message.persisted || message.role !== 'assistant' || !message.id) {
          return;
        }
        const rejectionCheckRes = isRejectionSentence(message.content);
        if (rejectionCheckRes.type === SENTENCE_TENDENCY.REJECTION) {
          console.debug('[session] rejection sentence detected:', rejectionCheckRes);
          return;
        }
        if (!ChatSessionManager.grpcClients.clip) {
          throw new Error('Cannot find available clip service client in session manager.');
        }
        const pointVector = await (ChatSessionManager.grpcClients.clip as ClipClient).encodeText(`${message.content}`);
        console.debug('[session] to persist message:', message);
        await (ChatSessionManager.grpcClients.qdrant as QdrantClient).upsertPoints(HISTORY_COLLECTION, {
          id: {
            uuid: message.id,
            pointIdOptions: 'uuid',
          },
          vectors: {
            vector: {
              data: pointVector,
            },
          },
          payload: {
            message: {
              structValue: {
                fields: {
                  id: {
                    stringValue: message.id,
                  },
                  role: {
                    stringValue: message.role,
                  },
                  content: {
                    stringValue: message.content,
                  },
                  created: {
                    integerValue: message.created ? Math.floor(message.created / 1e3) : message.created,
                  },
                },
              },
            },
          },
        });
        persisted.push(message.id);
        console.debug('[session] message has been added to qdrant:', message.id);
      }),
      ...this.messages.map(async (message) => {
        if (message.persisted || !message.id) {
          return;
        }
        // build history entity
        const history = new ChatHistory();
        history.content = message.content;
        history.created = Math.floor((message.created || Date.now()) / 1e3);
        history.role = message.role;
        history.uuid = message.id;
        history.sessionId = ChatSessionManager.getCurrentSession()?.id || '';
        history.usage = new Usage(UsageManager.getChatUsage(message.id));
        // insert to database
        const dataSource = getDataSource();
        await dataSource.createQueryBuilder().insert().into(ChatHistory).values(history).execute();
      }),
    ]);

    // rewrite the local flag
    this.messages = this.messages.map((message) => {
      if (!message.id) {
        return message;
      }
      if (persisted.includes(message.id)) {
        return {
          ...message,
          persisted: true,
        };
      }
      return message;
    });
  }

  private async createOnDatabase() {
    const session = new Session();
    session.uuid = this.id;
    session.startedAt = this.startedAt;
    await getDataSource().createQueryBuilder().insert().into(Session).values(session).execute();
  }
}
