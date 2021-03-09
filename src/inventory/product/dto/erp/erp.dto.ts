import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator';
import { IErpDetails } from '../../interface/erp-details.interface';

@Expose()
export class ErpProductDto {
  @IsString()
  @IsDefined()
  barcode: string;

  @IsNumber()
  @IsDefined()
  mainCode: number;

  @IsString()
  @IsDefined()
  sku: string;

  @IsString()
  @IsDefined()
  styleCode: string;

  @IsNumber()
  @IsDefined()
  tsCode: number;

  @IsNumber()
  @IsDefined()
  basePrice: number;

  @IsNumber()
  @IsDefined()
  salePrice: number;

  @ValidateNested()
  @IsDefined()
  erpDetails: IErpDetails;

  @ValidateNested()
  @IsDefined()
  searchList: string[];
}
