import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Entity, Column, OneToMany, Timestamp } from 'typeorm';
import { Address } from './address.entity.jw';

@Entity({ name: 'Customer' })
export class Customer extends AbstractEntity {
  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  //! Man : true, Woman: false
  @Column({ nullable: true })
  gender: boolean;

  @Column({ type: 'timestamp', nullable: true })
  loggedinAt: Timestamp;

  @Column({ type: 'timestamp', nullable: true })
  birthDate: Timestamp;

  //? Relations
  @OneToMany(() => Address, (address) => address.customer)
  address: Address;
}
