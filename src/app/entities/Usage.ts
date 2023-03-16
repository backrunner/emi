import { Column } from 'typeorm';

export class Usage {
  @Column({ type: 'integer' })
  public promotTokens!: number;

  @Column({ type: 'integer' })
  public completionTokens!: number;

  @Column({ type: 'integer' })
  public totalTokens!: number;
}
