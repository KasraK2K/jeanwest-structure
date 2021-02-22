import { IsString, IsBoolean } from 'class-validator';
import { Address } from 'src/user/common/entity/typeorm/address.entity.jw';
import { UserAuth } from 'src/user/common/entity/typeorm/user-auth.entity.jw';

export class GetMyUserDto {
  userAccountId: string;
}
export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  birthDate: Date;

  //! Man : true, Woman: false
  @IsBoolean()
  gender: boolean;

  userAuthId?: string;
  userAccountId?: any;
}

export class UserResponseDto {
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

  readonly userAuth: UserAuth;
}

export class CreateUserResponseDto {
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

  userAuth: UserAuth;
}
