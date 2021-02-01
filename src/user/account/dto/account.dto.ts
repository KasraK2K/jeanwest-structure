import { IsString, IsNumber, IsObject, IsOptional } from 'class-validator';

export class LoginDto {
  @IsString()
  mobile: string;
}

export class LoginResponseDto {
  account: Account;
  readonly token: string;
}
export class Account {
  id: number;
  mobile: string;
  email?: string;
}
