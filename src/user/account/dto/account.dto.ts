import { IsString } from 'class-validator';

export class AuthenticateDto {
  @IsString()
  phoneNumber: string;

  @IsString()
  pin: string;
}

export class AuthenticateResponseDto {
  account: Account;
  readonly token: string;
}

export class AccountDto {
  id: number;
  mobile: string;
  email?: string;
}

export class GetMyAccountDto {
  userAcccoutnId: string;
}
