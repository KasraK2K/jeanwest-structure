import { AbstractEntity } from 'src/inventory/common/entity/typeorm/abstract.entity';
import { Entity, Column, OneToMany, Timestamp } from 'typeorm';
import { Address } from './address.entity.jw';

@Entity({ name: 'Customer' })
export class Customer extends AbstractEntity {
  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  //! Man : true, Woman: false
  @Column()
  gender: boolean;

  @Column({ type: 'timestamp' })
  loggedinAt: Timestamp;

  @Column({ type: 'timestamp' })
  birthDate: Timestamp;

  //? Relations
  // @Column({ nullable: true })
  // userAuthId: string;

  @OneToMany(() => Address, (address) => address.user)
  address: Address;

  // @OneToOne(() => UserAuth, (userAuth) => userAuth.user)
  // @JoinColumn()
  // userAuth: UserAuth;
}
