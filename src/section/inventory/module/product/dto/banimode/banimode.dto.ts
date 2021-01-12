import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNumber, ValidateNested } from 'class-validator';
import { IBanimodeDetails } from '../../interface/banimode-details.interface';

@Expose()
export class BanimodeProductDto {
  @IsNumber()
  @IsDefined()
  BM_productCode: number;

  @ValidateNested()
  @IsDefined()
  banimodeDetails: IBanimodeDetails;
}
