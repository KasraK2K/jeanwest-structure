import { IsString } from 'class-validator';

export class authenticateDto {
  @IsString()
  mobile: string;
}

export class authenticateResponseDto {
  account: Account;
  readonly token: string;
}
export class Account {
  id: number;
  mobile: string;
  email?: string;
}
