import { IsNumber, IsObject, IsString } from 'class-validator';
import { Datetime } from 'src/branch/common/entity/typeorm/timestamp.entity';

export class getBranchesDto {
  @IsString()
  long: string;

  @IsString()
  lat: string;
}

export class CreateBranchDto {
  @IsString()
  DepartmentInfo_ID: string;

  @IsString()
  isActive: number;

  @IsString()
  DepName: string;

  @IsString()
  DepTel: string;

  @IsString()
  DepAddress: string;

  @IsString()
  long: number;

  @IsString()
  lat: number;
}

export class GetBranchesResponseDto extends CreateBranchDto {
  @IsNumber()
  id: number;

  @IsNumber()
  distance?: number;

  @IsObject()
  datetime: Datetime;
}
