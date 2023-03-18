import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChatSummary {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 255 })
  public uuid!: string;

  @Column({ type: 'varchar', length: 255 })
  public sessionId!: string;

  @Column({ type: 'text' })
  public content!: string;

  @Column({ type: 'integer', nullable: true })
  public startId?: number;

  @Column({ type: 'integer', nullable: true })
  public endId?: number;
}
