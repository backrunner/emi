import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChatSummary {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 255 })
  public uuid!: string;

  @Column({ type: 'varchar', length: 255 })
  public sessionId!: string;

  @Column({ type: 'string' })
  public content!: string;

  @Column({ type: 'integer' })
  public startId?: number;

  @Column({ type: 'integer' })
  public endId?: number;
}
