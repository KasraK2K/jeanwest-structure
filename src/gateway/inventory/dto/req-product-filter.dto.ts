import { Exclude, Expose } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IPaginationOption } from 'src/common/interface/pagination-option.interface';
import { IFilter } from 'src/gateway/inventory/common/interface/product-filter.interface';

@Exclude()
export class ReqProductFilterDto {

  @Expose()
  @ValidateNested()
  filter: IFilter;

  @Expose()
  @ValidateNested()
  option: IPaginationOption
}