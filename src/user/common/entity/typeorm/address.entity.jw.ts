import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Datetime } from 'src/inventory/common/entity/typeorm/timestamp.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity.jw';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Iran' })
  country: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column({ type: 'double precision', nullable: true })
  longtitude: number;

  @Column({ type: 'double precision', nullable: true })
  latitude: number;

  @Column({ default: true })
  active: boolean;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  //? Relations
  @Column({ nullable: true })
  personId: string;

  @ManyToOne(() => Person, (person) => person.address)
  person: Person;
}
