import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import {
  BaseEntity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Entity, Column, OneToMany } from 'typeorm';
import { Datetime } from './timestamp.entity';

@Entity()
export class Branch extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column({ unique: true })
  mobile: string;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  //? Relations
}
