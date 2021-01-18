import { Type } from 'class-transformer';
import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class GetUserDto {
  @IsString()
  readonly mobile: string;
}

export class UpdateUserDto {
  @IsNumber()
  ERPCustomers_ID: number;

  @IsString()
  Name: string;

  @IsString()
  Family: string;

  @IsString()
  Email: string;

  @IsNumber()
  Gender: number;

  @IsDate()
  @Type(() => Date)
  BirthDate: Date;
}

export class UpdateUserResponseDto {
  @IsString()
  tblPosCustomers_ID: string;

  @IsString()
  Name: string;

  @IsString()
  Family: string;

  @IsString()
  Email: string;

  @IsBoolean()
  Gender: boolean;

  @IsDate()
  @Type(() => Date)
  BirthDate: Date;
}

export class CreateUserDto {
  @IsString()
  Mobile: string;

  @IsString()
  Comment: string;

  @IsNumber()
  CusType: number;

  @IsNumber()
  CusID: number;
}

export class CreateUserResponseDto {
  @IsString()
  tblposCustomers_ID: string;
}

export class GetUserResponseDto {
  readonly tblPosCustomers_ID: string;

  readonly PartnerShipCode: string;

  readonly Mobile: string;

  readonly Name: string;

  readonly FamilyName: string;

  readonly ShortAdress: string;

  readonly CusType: string;

  readonly Email: string;

  readonly BirthDate: string;
}

export class GetCustomersResponseDto {
  readonly tblPosCustomerTypes_ID: string;

  readonly CTypeName: string;

  readonly AdditionClubDiscount: number;
}

export class GetUserTransactionsListDto {
  @IsString()
  readonly tblPosCustomers_ID: string;
}

export class GetUserTransactionsListResponseDto {
  @IsString()
  tblPosTransactions_ID: string;

  @IsString()
  TransactionID: string;

  @IsDate()
  @Type(() => Date)
  ArchiveDate: Date;

  @IsString()
  Pay: number;

  @IsString()
  BarcodeMain_IDList: string;

  @IsString()
  QTY: number;
}

export class GetInvoiceDetailsResponseDto {
  @IsString()
  tblPosTransactions_ID: string;

  @IsString()
  TransactionID: string;

  @IsString()
  ArchiveDate: string;

  @IsString()
  Name: string;

  @IsString()
  FamilyName: string;

  @IsNumber()
  TotalInvoicePrice: number;

  @IsString()
  PayDetailsList: string[];

  @IsString()
  BarcodeMain_IDList: string[];
}

export class GetUserGiftcardsResponseDto {
  @IsString()
  GCNum: string;

  @IsNumber()
  GCBalance: number;

  @IsDate()
  @Type(() => Date)
  ExpDate: Date;

  @IsString()
  GCGroupName: string;

  @IsString()
  CodingDepartmentCode: string | null;

  @IsNumber()
  CodingDepartmentCount: number;

  @IsNumber()
  MinPriceForUser: number;
}
