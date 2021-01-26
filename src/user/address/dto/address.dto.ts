import { IsString, IsNumber, IsObject } from 'class-validator';

export class GetByIdDto {
  readonly id: string | number;
}

export class CreateAddressDto {
  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;
}

export class AddressResponseDto {
  @IsString()
  readonly id: number;

  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;

  @IsString()
  personId?: string;
}

export class CreateAddressResponseDto {
  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;

  @IsString()
  personId?: string;
}

export class UpdateAddressDto {
  @IsString()
  readonly id: number;

  @IsString()
  country: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsNumber()
  longtitude: number;

  @IsNumber()
  latitude: number;

  @IsString()
  personId?: string;

  @IsObject()
  person: Record<string, unknown>;
}
