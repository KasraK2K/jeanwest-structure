import { Expose } from 'class-transformer';
import { IsArray, IsDefined, IsString } from 'class-validator';

@Expose()
export class RawErpProductDto {
  @IsString()
  @IsDefined()
  BarcodeMain_ID: string;
  @IsString()
  @IsDefined()
  Style: string;
  @IsString()
  @IsDefined()
  SKU: string;
  @IsString()
  @IsDefined()
  Barcode: string;
  @IsString()
  @IsDefined()
  Color: string;
  @IsString()
  @IsDefined()
  ColorFamily: string;
  @IsString()
  @IsDefined()
  ColorEnTitle: string;
  @IsString()
  @IsDefined()
  Size: string;
  @IsString()
  @IsDefined()
  CategoriesTitle: string;
  @IsString()
  @IsDefined()
  ProductName: string;
  @IsString()
  @IsDefined()
  ProductNameEN: string;
  @IsString()
  @IsDefined()
  ProductStyletitle: string;
  @IsString()
  @IsDefined()
  ProductStyleTitleEN: string;
  @IsString()
  @IsDefined()
  MaterialTitle: string;
  @IsString()
  @IsDefined()
  SexTitle: string;
  @IsString()
  @IsDefined()
  SeasonCode: string;
  @IsString()
  @IsDefined()
  SeasonCode2: string;
  @IsString()
  @IsDefined()
  ProductAge: string;
  @IsString()
  @IsDefined()
  ProductCutting: string;
  @IsString()
  @IsDefined()
  OrgPrice: string;
  @IsString()
  @IsDefined()
  SalePrice: string;
  @IsString()
  @IsDefined()
  Brand: string;
  @IsString()
  @IsDefined()
  ProductGroup: string;
  @IsString()
  @IsDefined()
  ProductCategory: string;
  @IsString()
  @IsDefined()
  TSCodeID: string;
  @IsArray()
  @IsDefined()
  SearchCode: string[];
}
