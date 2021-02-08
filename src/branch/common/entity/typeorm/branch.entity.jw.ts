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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  DepartmentInfo_ID: string;

  @Column({ default: 1 })
  isActive: number;

  @Column()
  DepName: string;

  @Column()
  DepTel: string;

  @Column()
  DepAddress: string;

  @Column()
  long: string;

  @Column()
  lat: string;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  //? Relations
}
