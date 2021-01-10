import { IsNumber, IsString } from 'class-validator';
import { AbstractEntity } from 'src/section/inventory/common/entity/abstract.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Dog extends AbstractEntity {
  @IsString()
  @Column()
  name: string;

  @IsNumber()
  @Column()
  age: number;
}
