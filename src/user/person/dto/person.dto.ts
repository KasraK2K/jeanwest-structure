import { IsString, IsDate, IsBoolean } from 'class-validator';
import { Address } from 'src/user/common/entity/typeorm/address.entity.jw';

export class CreatePersonDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  birthDate: Date;

  //! Man : true, Woman: false
  @IsBoolean()
  gender: boolean;

  accountId?: string;
  userAccountId?: string;
}

export class PersonResponseDto {
  readonly id: number;

  readonly firstName: string;

  readonly lastName: string;

  readonly birthDate: Date;

  //! Man : true, Woman: false
  readonly gender: boolean;

  readonly datetime: Date;

  //? Relations

  readonly addressId?: string[];

  readonly accountId: string;

  readonly address?: Address;

  readonly account: Account;
}

export class CreatePersonResponseDto {
  id: number;

  firstName: string;

  lastName: string;

  birthDate: Date;

  //! Man : true, Woman: false
  gender: boolean;

  datetime: Date;

  //? Relations

  addressId?: string[];

  accountId: string;

  address?: Address;

  account: Account;
}
