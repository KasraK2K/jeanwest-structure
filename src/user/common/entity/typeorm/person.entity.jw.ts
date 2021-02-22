import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import {
  BaseEntity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Entity, Column, OneToMany } from 'typeorm';
import { Account } from './account.entity.jw';
import { Address } from './address.entity.jw';
import { Datetime } from './timestamp.entity';

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'timestamp' })
  birthDate: Timestamp;

  //! Man : true, Woman: false
  @Column()
  gender: boolean;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  @Column({ default: true })
  active: boolean;

  //? Relations
  @Column({ nullable: true })
  accountId: string;

  @OneToMany(() => Address, (address) => address.person)
  address: Address;

  @OneToOne(() => Account, (account) => account.person)
  @JoinColumn()
  account: Account;
}
