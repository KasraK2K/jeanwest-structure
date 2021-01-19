export class GetProductsWithtsCodeIdDto {
  readonly TsCodeId: string;

  readonly TopNum: number;
}

export class GetProductsDto {
  readonly TopNum: number;

  readonly RowNumber: number;
}

export class GetProductsWithPaginationDto {
  readonly Page: number;

  readonly PerPage: number;
}

export class GetProductByBarcodeDto {
  readonly Barcode: string;
}
export class GetProductsResponseDto {
  readonly TotalCount: number;

  readonly RowNumber: number;

  readonly BarcodeMain_ID: string;

  readonly Style: string;

  readonly SKU: string;

  readonly Barcode: string;

  readonly Color: string;

  readonly ColorFamily: string;

  readonly ColorEnTitle: string;

  readonly Size: string;

  readonly CategoriesTitle: string;

  readonly ProductName: string;

  readonly ProductNameEN: string;

  readonly ProductStyletitle: string;

  readonly ProductStyleTitleEN: string;

  readonly MaterialTitle: null | string;

  readonly SexTitle: string;

  readonly SeasonCode: string;

  readonly SeasonCode2: string;

  readonly ProductAge: string;

  readonly ProductCutting: null | string;

  readonly OrgPrice: number;

  readonly SalePrice: number;

  readonly Brand: string;

  readonly ProductGroup: string;

  readonly ProductCategory: string;

  readonly TSCodeID: string;

  readonly SearchCode: string[];
}
