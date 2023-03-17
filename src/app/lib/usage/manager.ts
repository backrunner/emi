import type { ChatGPTUsage } from '@/types/openai';

export class UsageManager {
  private static chatUsage = new Map<string, ChatGPTUsage>();

  public static setChatUsage(id: string, usage: ChatGPTUsage) {
    if (this.chatUsage.has(id)) {
      throw new Error('This chat message already had a paired usage data.');
    }
    this.chatUsage.set(id, usage);
  }

  public static getChatUsage(id: string) {
    return this.chatUsage.get(id);
  }
}
