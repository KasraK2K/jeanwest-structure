import { Inject, Injectable } from '@nestjs/common';
import { ERP_PRODUCT_REPO } from 'src/section/erp/common/constant/repository.const';
import {
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithPaginationDto,
  GetProductsWithtsCodeIdDto,
} from '../dto/product.dto';
import { ERP_ProductSrevice } from '../interface/product-service.interface';
import {
  getProductByBarcodeQuery,
  getProductsWithPaginationQuery,
  getProductsWithtsCodeIdQuery,
  productQuery,
} from '../query/raw-query';

@Injectable()
export class ERP_ProductService implements ERP_ProductSrevice {
  constructor(
    @Inject(ERP_PRODUCT_REPO)
    private readonly repository,
  ) {}

  public async getProductsWithtsCodeId(
    body: GetProductsWithtsCodeIdDto,
  ): Promise<GetProductsResponseDto[]> {
    const { TopNum, TsCodeId } = body;
    return this.repository.runQuery(
      getProductsWithtsCodeIdQuery(TopNum, TsCodeId),
    );
  }

  public async getProductsWithRowNumber(
    body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    const { TopNum, RowNumber } = body;
    return this.repository.runQuery(productQuery(TopNum, RowNumber));
  }

  public async getProductsWithPageNumber(
    body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    const { Page, PerPage } = body;
    return this.repository.runQuery(
      getProductsWithPaginationQuery(Page, PerPage),
    );
  }

  public async getProductByBarcode(
    body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]> {
    const { Barcode } = body;
    return this.repository.runQuery(getProductByBarcodeQuery(Barcode));
  }
}
