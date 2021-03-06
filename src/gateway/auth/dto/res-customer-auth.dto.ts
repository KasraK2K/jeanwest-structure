import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class ResCustomerAuthDto{
  @Expose()
  @IsString()
  token: string;
}
