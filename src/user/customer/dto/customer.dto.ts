import { IsString, IsBoolean } from 'class-validator';
import { Address } from 'src/user/common/entity/typeorm/address.entity.jw';

export class GetMyCustomerDto {
  userAccountId: string;
}
export class CreateCustomerDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  birthDate?: Date;

  //! Man : true, Woman: false
  @IsBoolean()
  gender?: boolean;

  userAuthId?: string;
  userAccountId?: any;
}

export class CustomerResponseDto {
  readonly id: number;

  readonly firstName: string;

  readonly lastName: string;

  readonly birthDate: Date;

  //! Man : true, Woman: false
  readonly gender: boolean;

  readonly datetime: Date;

  //? Relations

  readonly addressId?: string[];

  readonly userAuthId: string;

  readonly address?: Address;
}

export class CreateCustomerResponseDto {
  id: number;

  firstName: string;

  lastName: string;

  birthDate: Date;

  //! Man : true, Woman: false
  gender: boolean;

  datetime: Date;

  //? Relations

  addressId?: string[];

  userAuthId: string;

  address?: Address;
}

export class FilterCustomerDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  phoneNumber?: string;

  @IsString()
  birthDate?: Date;

  //! Man : true, Woman: false
  @IsBoolean()
  gender?: boolean;

  userAuthId?: string;
  userAccountId?: any;
}
