import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class GetUserDto {
  @ApiProperty()
  @IsString()
  readonly mobile: string;
}

export class UpdateUserDto {
  @IsNumber()
  @ApiProperty()
  ERPCustomers_ID: number;

  @IsString()
  @ApiPropertyOptional()
  Name: string;

  @IsString()
  @ApiPropertyOptional()
  Family: string;

  @IsString()
  @ApiPropertyOptional()
  Email: string;

  @IsNumber()
  @ApiPropertyOptional()
  Gender: number;

  @ApiPropertyOptional()
  @IsDate()
  @Type(() => Date)
  BirthDate: Date;
}

export class UpdateUserResponseDto {
  @IsString()
  @ApiProperty()
  tblPosCustomers_ID: string;

  @IsString()
  @ApiProperty()
  Name: string;

  @IsString()
  @ApiProperty()
  Family: string;

  @IsString()
  @ApiProperty()
  Email: string;

  @IsBoolean()
  @ApiProperty()
  Gender: boolean;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  BirthDate: Date;
}

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  Mobile: string;

  @IsString()
  @ApiProperty()
  Comment: string;

  @IsNumber()
  @ApiProperty()
  CusType: number;

  @IsNumber()
  @ApiProperty()
  CusID: number;
}

export class CreateUserResponseDto {
  @ApiProperty()
  @IsString()
  tblposCustomers_ID: string;
}

export class GetUserResponseDto {
  @ApiProperty()
  readonly tblPosCustomers_ID: string;

  @ApiProperty()
  readonly PartnerShipCode: string;

  @ApiProperty()
  readonly Mobile: string;

  @ApiProperty()
  readonly Name: string;

  @ApiProperty()
  readonly FamilyName: string;

  @ApiProperty()
  readonly ShortAdress: string;

  @ApiProperty()
  readonly CusType: string;

  @ApiProperty()
  readonly Email: string;

  @ApiProperty()
  readonly BirthDate: string;
}

export class GetCustomersResponseDto {
  @ApiProperty()
  readonly tblPosCustomerTypes_ID: string;

  @ApiProperty()
  readonly CTypeName: string;

  @ApiProperty()
  readonly AdditionClubDiscount: number;
}

export class GetUserTransactionsListDto {
  @ApiProperty()
  @IsString()
  readonly tblPosCustomers_ID: string;
}

export class GetUserTransactionsListResponseDto {
  @ApiProperty()
  @IsString()
  tblPosTransactions_ID: string;

  @ApiProperty()
  @IsString()
  TransactionID: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  ArchiveDate: Date;

  @ApiProperty()
  @IsString()
  Pay: number;

  @ApiProperty()
  @IsString()
  BarcodeMain_IDList: string;

  @ApiProperty()
  @IsString()
  QTY: number;
}

export class getInvoiceDetailsResponseDto {
  @ApiProperty()
  @IsString()
  tblPosTransactions_ID: string;

  @ApiProperty()
  @IsString()
  TransactionID: string;

  @ApiProperty()
  @IsString()
  ArchiveDate: string;

  @ApiProperty()
  @IsString()
  Name: string;

  @ApiProperty()
  @IsString()
  FamilyName: string;

  @ApiProperty()
  @IsNumber()
  TotalInvoicePrice: number;

  @ApiProperty()
  @IsString()
  PayDetailsList: string[];

  @ApiProperty()
  @IsString()
  BarcodeMain_IDList: string[];
}

export class getUserGiftcardsResponseDto {
  @ApiProperty()
  @IsString()
  GCNum: string;

  @ApiProperty()
  @IsNumber()
  GCBalance: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  ExpDate: Date;

  @ApiProperty()
  @IsString()
  GCGroupName: string;

  @ApiProperty()
  @IsString()
  CodingDepartmentCode: string | null;

  @ApiProperty()
  @IsNumber()
  CodingDepartmentCount: number;

  @ApiProperty()
  @IsNumber()
  MinPriceForUser: number;
}
