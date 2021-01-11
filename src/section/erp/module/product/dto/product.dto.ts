import { ApiProperty } from '@nestjs/swagger';

export class GetProductsDto {
  @ApiProperty()
  readonly TopNum: string;

  @ApiProperty()
  readonly RowNumber: string;
}

export class GetProductsWithPaginationDto {
  @ApiProperty()
  readonly Page: number;

  @ApiProperty()
  readonly PerPage: number;
}

export class GetProductByBarcodeDto {
  @ApiProperty()
  readonly Barcode: string;
}
export class GetProductsResponseDto {
  @ApiProperty()
  readonly TotalCount: number;

  @ApiProperty()
  readonly RowNumber: string;

  @ApiProperty()
  readonly BarcodeMain_ID: string;

  @ApiProperty()
  readonly Style: string;

  @ApiProperty()
  readonly SKU: string;

  @ApiProperty()
  readonly Barcode: string;

  @ApiProperty()
  readonly Color: string;

  @ApiProperty()
  readonly ColorFamily: string;

  @ApiProperty()
  readonly ColorEnTitle: string;

  @ApiProperty()
  readonly Size: string;

  @ApiProperty()
  readonly CategoriesTitle: string;

  @ApiProperty()
  readonly ProductName: string;

  @ApiProperty()
  readonly ProductNameEN: string;

  @ApiProperty()
  readonly ProductStyletitle: string;

  @ApiProperty()
  readonly ProductStyleTitleEN: string;

  @ApiProperty()
  readonly MaterialTitle: null | string;

  @ApiProperty()
  readonly SexTitle: string;

  @ApiProperty()
  readonly SeasonCode: string;

  @ApiProperty()
  readonly SeasonCode2: string;

  @ApiProperty()
  readonly ProductAge: string;

  @ApiProperty()
  readonly ProductCutting: null | string;

  @ApiProperty()
  readonly OrgPrice: number;

  @ApiProperty()
  readonly SalePrice: number;

  @ApiProperty()
  readonly Brand: string;

  @ApiProperty()
  readonly ProductGroup: string;

  @ApiProperty()
  readonly ProductCategory: string;

  @ApiProperty()
  readonly TSCodeID: string;

  @ApiProperty()
  readonly SearchCode: string[];
}

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
