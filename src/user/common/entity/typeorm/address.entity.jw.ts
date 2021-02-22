import { Datetime } from 'src/inventory/common/entity/typeorm/timestamp.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { User } from './user.entity.jw';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  //? Only required if isUser is false
  @Column({ nullable: true })
  recieverFirstName: string;

  //? Only required if isUser is false
  @Column({ nullable: true })
  recieverLastName: string;

  //? Only required if isUser is false
  @Column({ nullable: true })
  recieverMobile: string;

  @Column({ default: 'Iran' })
  country: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  address: string;

  //? Shomareye pelak e khane
  @Column()
  houseNumber: string;

  //? Shomareye Vahed
  @Column()
  unitNumber: string;

  @Column()
  postalCode: string;

  @Column({ type: 'double precision', nullable: true })
  longtitude: number;

  @Column({ type: 'double precision', nullable: true })
  latitude: number;

  @Column({ default: true })
  active: boolean;

  @Column()
  isUser: boolean;

  @Column(() => Datetime, { prefix: '' })
  datetime: Datetime;

  //? Relations
  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.address)
  user: User;
}
