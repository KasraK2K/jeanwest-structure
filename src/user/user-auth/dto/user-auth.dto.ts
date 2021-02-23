import { IsString } from 'class-validator';
import { UserAuth } from 'src/user/common/entity/typeorm/user-auth.entity.jw';

export class AuthenticateDto {
  @IsString()
  phoneNumber: string;

  @IsString()
  pin: string;
}

export class AuthenticateResponseDto {
  account: UserAuth;
  readonly token: string;
}

export class AccountDto {
  id: number;
  mobile: string;
  email?: string;
}

export class GetMyUserAuthDto {
  userAccountId: string;
}
