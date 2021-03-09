import { Entity, Column } from 'typeorm';
import { IsDefined, IsString } from 'class-validator';
import { AbstractEntity } from './abstract.entity';

@Entity({name:'SmsPattern'})
export class SmsPattern extends AbstractEntity {
  @Column({ unique: true })
  @IsString()
  @IsDefined()
  name: string;

  @Column()
  @IsString()
  @IsDefined()
  context: string;
}
