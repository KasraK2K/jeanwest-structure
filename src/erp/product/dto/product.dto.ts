export class GetProductsWithFilterDto {
  readonly FiltersArr?: FiltersDto[];

  readonly PerPage: number;

  readonly PageNumber: number;

  readonly TSCodeID?: number;

  OrderBy: number;
}

export interface FilterKey {
  BarcodeMain_ID?: string;
  Style?: string;
  SKU?: string;
  Barcode?: string;
  Color?: string;
  ColorFamily?: string;
  ColorEnTitle?: string;
  Size?: string;
  CategoriesTitle?: string;
  ProductName?: string;
  ProductStyletitle?: string;
  ProductStyleTitleEN?: string;
  MaterialTitle?: string;
  SexTitle?: string;
  SeasonCode?: string;
  SeasonCode2?: string;
  ProductAge?: string;
  ProductCutting?: string;
  OrgPrice?: string;
  SalePrice?: string;
  Brand?: string;
  ProductGroup?: string;
  ProductCategory?: string;
}

export type FilterIndex = keyof FilterKey;

export class FiltersDto {
  readonly key: FilterIndex;
  readonly value?: string;
  readonly operator?: { type: string; start: string; end: string };
}

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
