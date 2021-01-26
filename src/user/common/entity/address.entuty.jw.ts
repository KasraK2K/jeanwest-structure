import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity.jw';

@Entity()
export class Address extends AbstractEntity {
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

  //? Relations
  @Column()
  personId: string;

  @ManyToOne(() => Person, (person) => person.address)
  person: Person;
}
