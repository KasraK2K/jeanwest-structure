import { Expose } from 'class-transformer';
import { IsDefined, IsOptional, IsString } from 'class-validator';

@Expose()
export class FilterDto {
  @IsString()
  @IsDefined()
  barcode: string;
}
