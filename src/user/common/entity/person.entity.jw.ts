import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Address } from './address.entuty.jw';

@Entity()
export class Person extends AbstractEntity {
  @Column({ array: true })
  addressId: string[];

  @OneToMany(() => Address, (address) => address.person)
  address: Address;
}
