import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { AbstractDto } from 'src/gateway/common/dto/abstract.dto';

@Exclude()
export class ResCustomerAuthDto extends AbstractDto{
  @Expose()
  @IsString()
  token: string;
}
