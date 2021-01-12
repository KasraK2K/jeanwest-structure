import { Entity, Column, Index } from 'typeorm';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { AbstractEntity } from 'src/section/inventory/common/entity/abstract.entity';
import {
  BANIMODE_INDEX,
  ERP_INDEX,
} from 'src/section/inventory/common/constant/database-index.const';
import { IErpDetails } from '../interface/erp-details.interface';
import { IBarcodeList } from '../interface/barcode-list.interface';
import { IBanimodeDetails } from '../interface/banimode-details.interface';

@Entity()
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
  SKU: string;

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
  @IsDefined()
  barcodeList: IBarcodeList;

  @Column({ unique: true, nullable: true })
  @IsNumber()
  @IsOptional()
  BM_productCode: number;

  @Column({ type: 'jsonb', nullable: true })
  @Index(BANIMODE_INDEX, { synchronize: false })
  @IsOptional()
  banimodeDetails: IBanimodeDetails;
}
