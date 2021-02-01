import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import {
  BaseEntity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Entity, Column, OneToMany } from 'typeorm';
import { Address } from './address.entity.jw';
import { Person } from './person.entity.jw';
import { Datetime } from './timestamp.entity';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column({ unique: true })
  mobile: string;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  //? Relations
  @OneToOne(() => Person, (person) => person.account)
  person: Person;
}
