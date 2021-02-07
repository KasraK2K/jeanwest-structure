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

export class getBranchesDto {
  @IsString()
  long: string;

  @IsString()
  lat: string;
}

export class GetBranchesResponseDto {
  static findMany() {
    throw new Error('Method not implemented.');
  }
}
