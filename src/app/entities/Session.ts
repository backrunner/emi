import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 255 })
  public uuid!: string;

  @Column({ type: 'integer' })
  public startedAt!: number;

  @Column({ type: 'integer', nullable: true })
  public endedAt?: number;
}
