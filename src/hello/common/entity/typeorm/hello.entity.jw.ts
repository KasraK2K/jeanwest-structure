import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'Hello' })
export class Hello extends AbstractEntity {
  @Column()
  message: string;
}
