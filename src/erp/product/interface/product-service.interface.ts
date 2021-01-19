import {
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithPaginationDto,
} from '../dto/product.dto';

export interface ERP_ProductSrevice {
  getProductsWithRowNumber(
    body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]>;

  getProductsWithPageNumber(
    body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]>;

  getProductByBarcode(
    body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]>;
}
