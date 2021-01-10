import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator';
import { IBarcodeList } from '../../interface/barcodeList.interface';
import { IErpDetails } from '../../interface/erpDetails.interface';

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
  SKU: string;

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
  barcodeList: IBarcodeList;
}
