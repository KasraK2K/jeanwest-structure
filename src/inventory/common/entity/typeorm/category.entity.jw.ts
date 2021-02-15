import { Entity, Column, Index } from 'typeorm';
import {
  IsArray,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IErpDetails } from '../../../product/interface/erp-details.interface';
import { IBanimodeDetails } from '../../../product/interface/banimode-details.interface';
import { AbstractEntity } from './abstract.entity';
import { BANIMODE_INDEX, ERP_INDEX } from '../../constant/database-index.const';

@Entity()
export class Category extends AbstractEntity {

  @Column({ unique: true })
  @IsString()
  @IsDefined()
  name: string;

  @Column({ type: 'jsonb' })
  @Index(ERP_INDEX, { synchronize: false })
  @IsDefined()
  details: unknown;
}
