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

@Entity({name:'Product'})
export class Product extends AbstractEntity {
  @Column({ default: 0 })
  @IsOptional()
  quantity: number;

  @Column({ unique: true })
  @IsString()
  @IsDefined()
  barcode: string;

  @Column({ type: 'bigint' })
  @IsNumber()
  @IsDefined()
  mainCode: number;

  @Column()
  @Index()
  @IsString()
  @IsDefined()
  sku: string;

  @Column()
  @Index()
  @IsString()
  @IsDefined()
  styleCode: string;

  @Column({ type: 'bigint' })
  @IsNumber()
  @IsDefined()
  tsCode: number;

  @Column({ type: 'double precision' })
  @IsNumber()
  @IsDefined()
  basePrice: number;

  @Column({ type: 'double precision' })
  @IsNumber()
  @IsDefined()
  salePrice: number;

  @Column({ type: 'jsonb' })
  @Index(ERP_INDEX, { synchronize: false })
  @IsDefined()
  erpDetails: IErpDetails;

  @Column({ type: 'jsonb' })
  @IsArray()
  @IsDefined()
  searchList: string[];

  @Column({ nullable: true })
  @IsNumber()
  @IsOptional()
  banimodeCode: number;

  @Column({ type: 'jsonb', nullable: true })
  @Index(BANIMODE_INDEX, { synchronize: false })
  @IsOptional()
  banimodeDetails: IBanimodeDetails;
}
