import { IsString } from 'class-validator';

export class CreateHelloDto {
  @IsString()
  message: string;
}
