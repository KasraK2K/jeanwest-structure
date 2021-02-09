import {
  IsString,
  IsNumber,
  IsObject,
  IsOptional,
  IsDefined,
} from 'class-validator';

export class LoginDto {
  @IsString()
  mobile: string;

  @IsString()
  pin: string;
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
