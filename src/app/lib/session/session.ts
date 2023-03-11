import { randomUUID } from 'node:crypto';
import dayjs from 'dayjs';
import { requestCompletions } from '@/app/api/openai';
import type { ChatGPTMessage, ChatGPTMessages } from '@/types/openai';
import { getInitalPrompt } from '@/app/constants/prompt';
import { ChatSessionManager } from './sessionManager';
import type { ClipClient } from '../grpc/clip-as-a-service';
import type { QdrantClient } from '../grpc/qdrant';
import { HISTORY_COLLECTION } from '@/app/constants/knowledge';

interface InternalChatMessage extends ChatGPTMessage {
  id?: string;
  created?: number;
  persisted?: boolean;
}

type InternalChatMessages = InternalChatMessage[];

export class ChatSession {
  public id: string = randomUUID();
  public messages: InternalChatMessages = getInitalPrompt();

  /**
   * Perform a chat action
   */
  public async chat(message: string) {
    console.debug('[session] receive chat request:', message);
    const wrappedMessage: ChatGPTMessage = {
      role: 'user',
      content: `(${dayjs().format('YYYY-MM-DD HH:mm:ss')})${message}`,
    };
    const decoratedMessage = {
      ...wrappedMessage,
      created: Date.now(),
      id: randomUUID(),
      persisted: false,
    };
    let completed;
    try {
      completed = await requestCompletions([...this.messages, wrappedMessage]);
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
    completed.content = `(${dayjs().format('YYYY-MM-DD HH:mm:ss')})${completed.content}`;
    this.messages.push(decoratedMessage, {
      ...completed,
      created: Date.now(),
      id: randomUUID(),
      persisted: false,
    });
    // after a chat interaction completed, persist related messages
    this.persist().catch((err) => {
      console.error('[session] Failed to persist chat messages', err);
    });
    return completed;
  }

  /**
   * Searching a related message by vector
   * @param userMessage current user input
   */
  private searchHistoryByVector(userMessage: InternalChatMessage) {}

  /**
   * Persist all messages to database (both tensor search engine and sqlite for logging)
   */
  private async persist() {
    await Promise.all(
      this.messages.map(async (message) => {
        if (message.persisted || message.role === 'system') {
          return;
        }
        if (!ChatSessionManager.grpcClients.clip) {
          throw new Error('Cannot find available clip service client in session manager.');
        }
        const pointVector = await (ChatSessionManager.grpcClients.clip as ClipClient).encodeText(
          `${message.role === 'assistant' ? 'Emi' : '我'}: ${message.content}`,
        );
        await (ChatSessionManager.grpcClients.qdrant as QdrantClient).upsertPoints(HISTORY_COLLECTION, {
          vectors: {
            vector: {
              data: pointVector,
            },
          },
          payload: {
            message: {
              structValue: {
                fields: {
                  role: {
                    stringValue: message.role,
                  },
                  content: {
                    stringValue: message.content,
                  },
                  created: {
                    integerValue: message.created,
                  },
                },
              },
            },
          },
        });
        console.debug('[session] message has been added to qdrant:', message.id);
      }),
    );
  }
}
