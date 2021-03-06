import { Exclude, Expose } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { AbstractDto } from 'src/gateway/common/dto/abstract.dto';
import { ISize, ISubGroup } from '../common/interface/category.interface';

@Exclude()
export class ResCategoryDto extends AbstractDto {
  @Expose()
  @IsArray()
  group: string[];

  @Expose()
  @ValidateNested()
  subGroup: ISubGroup;

  @Expose()
  @ValidateNested()
  size: ISize;

  @Expose()
  @IsArray()
  gender: string[];

  @Expose()
  @IsArray()
  ageGroup: string[];

  @Expose()
  @IsArray()
  colorFamily: string[];
}
