import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Datetime } from './timestamp.entity';

/** @class Base representing an abstract of main model. */
export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: true })
  active:boolean;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;
}
