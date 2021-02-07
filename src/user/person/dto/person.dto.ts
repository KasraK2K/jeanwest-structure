import { Type } from 'class-transformer';
import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  readonly mobile: string;
}

export class PersonResponseDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly mobile: string;
}

export class CreatePersonResponseDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly mobile: string;
}
