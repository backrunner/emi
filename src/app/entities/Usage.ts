import { Column } from 'typeorm';
import type { ChatGPTUsage } from '@/types/openai';

export class Usage {
  @Column({ type: 'integer' })
  public promptTokens!: number;

  @Column({ type: 'integer' })
  public completionTokens!: number;

  @Column({ type: 'integer' })
  public totalTokens!: number;

  public constructor(messageUsage?: ChatGPTUsage) {
    if (!messageUsage) {
      return;
    }
    this.promptTokens = messageUsage.prompt_tokens;
    this.completionTokens = messageUsage.completion_tokens;
    this.totalTokens = messageUsage.total_tokens;
  }
}
