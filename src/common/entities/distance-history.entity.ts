import { Entity, Column, Double } from 'typeorm';
import { BaseDomain } from './base';

@Entity()
export class DistanceHistory extends BaseDomain {
  @Column()
  latitude1: string;

  @Column()
  longitude1: string;

  @Column()
  displayName1: string;

  @Column()
  latitude2: string;

  @Column()
  longitude2: string;

  @Column()
  displayName2: string;

  @Column({ type: 'double', default: 0 })
  distance: number;
}
