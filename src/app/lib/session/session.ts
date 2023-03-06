import { requestCompletions } from "@/app/api/openai";
import type { ChatGPTMessage, ChatGPTMessages } from "@/types/openai";

export class ChatSession {
  private messages: ChatGPTMessages = [];

  /**
   * Init a new chat session
   */
  public init() {
    this.messages = [];
  }

  /**
   * Perform a chat action
   */
  public async chat(message: string) {
    const wrappedMessage: ChatGPTMessage = {
      role: 'user',
      content: message,
    };
    let completed;
    try {
      completed = await requestCompletions([
        ...this.messages,
        wrappedMessage,
      ]);
    } catch (err) {
      console.error('Failed to complete the chat content:', err);
      throw err;
    }
    if (!completed) {
      return;
    }
    this.messages.push(wrappedMessage, completed);
  }

  /**
   * Persist all messages to database (both tensor search engine and sqlite for logging)
   */
  public persist() {

  }
};
