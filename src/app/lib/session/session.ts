import { randomUUID } from 'node:crypto';
import dayjs from 'dayjs';
import { requestCompletions } from '@/app/api/openai';
import type { ChatGPTMessage, ChatGPTMessages } from '@/types/openai';
import { getInitalPrompt } from '@/app/constants/prompt';

export class ChatSession {
  public id: string = randomUUID();
  public messages: ChatGPTMessages = getInitalPrompt();

  /**
   * Perform a chat action
   */
  public async chat(message: string) {
    console.debug('[session] receive chat request:', message);
    const wrappedMessage: ChatGPTMessage = {
      role: 'user',
      content: `(${dayjs().format('YYYY-MM-DD HH:mm:ss')})${message}`,
    };
    let completed;
    try {
      completed = await requestCompletions([...this.messages, wrappedMessage]);
    } catch (err: any) {
      console.error('Failed to complete the chat content:', err);
      return {
        role: 'error',
        content: `${err?.message || 'Failed to get the chat response: unknown error.'}`
      }
    }
    console.debug('[session] chat completed:', completed);
    if (!completed) {
      return;
    }
    completed.content = `(${dayjs().format('YYYY-MM-DD HH:mm:ss')})${completed.content}`;
    this.messages.push(wrappedMessage, completed);
    return completed;
  }

  /**
   * Persist all messages to database (both tensor search engine and sqlite for logging)
   */
  public persist() {}
}
