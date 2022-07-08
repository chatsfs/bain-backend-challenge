import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimeDomain } from './time.domain';

@Entity()
export class BaseDomain extends TimeDomain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  active: boolean;
}
