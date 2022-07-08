import { Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TimeDomain {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
