import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { IBanimodeDetails } from '../common/interface/banimode-details.interface';
import { IErpDetails } from '../common/interface/erp-details.interface';

@Exclude()
export class ResProductFilterDto {

  @Expose()
  @IsNumber()
  quantity: number;

  @Expose()
  @IsString()
  barcode: string;

  @Expose()
  @IsString()
  mainCode: string;

  @Expose()
  @IsString()
  sku: string;

  @Expose()
  @IsString()
  styleCode: string;

  @Expose()
  @IsNumber()
  basePrice: number;

  @Expose()
  @IsNumber()
  salePrice: number;

  @Expose()
  @ValidateNested()
  erpDetails: IErpDetails;

  @Expose()
  @IsArray()
  searchList: string[];

  @Expose()
  @IsNumber()
  banimodeCode: number;

  @Expose()
  @ValidateNested()
  banimodeDetails: IBanimodeDetails;

  @Expose()
  @IsDate()
  created_at: Date;
}