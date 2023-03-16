import type { ChatGPTRole } from '@/types/openai';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Usage } from './Usage';

@Entity()
export class ChatHistory {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 255 })
  public uuid!: string;

  @Column({ type: 'varchar', length: 16 })
  public role!: ChatGPTRole;

  @Column({ type: 'text' })
  public content!: string;

  @Column({ type: 'integer' })
  public created!: number;

  @Column({ type: 'varchar', length: 255 })
  public sessionId!: string;

  @Column(() => Usage)
  public usage!: Usage;
}
