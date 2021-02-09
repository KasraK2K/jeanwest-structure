import { IsString } from 'class-validator';

export class AuthenticateDto {
  @IsString()
  mobile: string;

  @IsString()
  pin: string;
}

export class AuthenticateResponseDto {
  account: Account;
  readonly token: string;
}
export class Account {
  id: number;
  mobile: string;
  email?: string;
}
