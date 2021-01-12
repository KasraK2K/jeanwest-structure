import { ApiProperty } from '@nestjs/swagger';

export class GetBranchesResponseDto {
  @ApiProperty()
  readonly DepartmentInfo_ID: string;

  @ApiProperty()
  readonly DepName: string;

  @ApiProperty()
  readonly LocationPoint: string[];

  @ApiProperty()
  readonly DepTel: string;

  @ApiProperty()
  readonly DepAddress: string;

  @ApiProperty()
  readonly long: string;

  @ApiProperty()
  readonly lat: string;
}
