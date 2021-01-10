import { IsDefined, IsNumber, IsString } from 'class-validator';
import { ERP_INDEX } from 'src/section/inventory/common/constant/database-index.const';
import { Column, Index } from 'typeorm';
import { IBarcodeList } from '../../interface/barcodeList.interface';
import { IErpDetails } from '../../interface/erpDetails.interface';

export class ErpProduct {
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
}
