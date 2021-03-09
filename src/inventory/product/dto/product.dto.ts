import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator';
import { IBanimodeDetails } from '../interface/banimode-details.interface';
import { IErpDetails } from '../interface/erp-details.interface';

@Exclude()
export class ProductDto {
  @Expose()
  @IsNumber()
  @IsDefined()
  quantity: number;

  @Expose()
  @IsString()
  @IsDefined()
  barcode: string;

  @Expose()
  @IsNumber()
  @IsDefined()
  mainCode: number;

  @Expose()
  @IsString()
  @IsDefined()
  sku: string;

  @Expose()
  @IsString()
  @IsDefined()
  styleCode: string;

  @IsNumber()
  @IsDefined()
  tsCode: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  basePrice: number;

  @Expose()
  @IsNumber()
  @IsDefined()
  salePrice: number;

  @Expose()
  @ValidateNested()
  @IsDefined()
  erpDetails: IErpDetails;

  @Expose()
  @ValidateNested()
  @IsDefined()
  searchList: string[];

  @Expose()
  @IsNumber()
  @IsDefined()
  banimodeCode: number;

  @Expose()
  @ValidateNested()
  @IsDefined()
  banimodeDetails: IBanimodeDetails;
}
