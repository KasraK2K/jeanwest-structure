import {
  IsString,
  IsNumber,
  IsObject,
  IsOptional,
  IsBoolean,
  IsNumberString,
} from 'class-validator';
import { User } from 'src/user/common/entity/typeorm/user.entity.jw';
import { Timestamp } from 'typeorm';

export class GetByIdDto {
  readonly id: string | number;
}

export class CreateAddressDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  recieverFirstName?: string;

  @IsOptional()
  @IsString()
  recieverLastName?: string;

  @IsOptional()
  @IsString()
  recieverMobile?: string;

  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  district: string;

  @IsString()
  address: string;

  @IsString()
  houseNumber: string;

  @IsString()
  unitNumber: string;

  @IsString()
  postalCode: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;

  @IsBoolean()
  active: boolean;

  @IsBoolean()
  isUser: boolean;

  userAccountId?: string;

  user?: User;
}

export class AddressResponseDto {
  @IsString()
  readonly id: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  recieverFirstName?: string;

  @IsOptional()
  @IsString()
  recieverLastName?: string;

  @IsOptional()
  @IsString()
  recieverMobile?: string;

  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  district: string;

  @IsString()
  address: string;

  @IsString()
  houseNumber: string;

  @IsString()
  unitNumber: string;

  @IsString()
  postalCode: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;

  @IsBoolean()
  active: boolean;

  @IsBoolean()
  isUser: boolean;

  @IsObject()
  datetime: {
    created_at: Timestamp;
    updated_at: Timestamp;
    deleted_at?: Timestamp;
  };

  @IsString()
  userId?: string;
}

export class UpdateAddressDto {
  @IsNumberString()
  readonly id: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  recieverFirstName?: string;

  @IsOptional()
  @IsString()
  recieverLastName?: string;

  @IsOptional()
  @IsString()
  recieverMobile?: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  houseNumber: string;

  @IsOptional()
  @IsString()
  unitNumber: string;

  @IsOptional()
  @IsString()
  postalCode: string;

  @IsOptional()
  @IsNumber()
  longtitude: number;

  @IsOptional()
  @IsNumber()
  latitude: number;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsBoolean()
  isUser: boolean;

  @IsOptional()
  @IsString()
  userId?: string;
  userAccoutnId: any;
}

export interface cardInfoInterface {
  membership: string;
  engtitle: string;
  perTitle: string;
  minPay: number;
  maxPay: number;
  receiptConditions: string;
  subTitles: string[];
  descriptions: string[];
}

export class StaticGiftCardRsponseDto {
  bluePlusCardInfo: cardInfoInterface;
  blue2PlusCardInfo: cardInfoInterface;
  silverCardInfo: cardInfoInterface;
  goldCardInfo: cardInfoInterface;
}
