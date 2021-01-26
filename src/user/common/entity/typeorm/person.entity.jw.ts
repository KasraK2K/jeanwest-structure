import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Address } from './address.entity.jw';

@Entity()
export class Person extends AbstractEntity {
  @Column({ type: 'text', array: true, default: {} })
  addressId: string[];

  @OneToMany(() => Address, (address) => address.person)
  address: Address;
}
