import { Inject, Injectable } from '@nestjs/common';
import { ERP_PRODUCT_REPO } from 'src/section/erp/common/constant/repository.const';
import { GetProductsResponseDto } from '../dto/product.dto';
import { ERP_ProductSrevice } from '../interface/product-service.interface';
import {
  getProductByBarcodeQuery,
  getProductsWithPaginationQuery,
  productQuery,
} from '../query/raw-query';

@Injectable()
export class ERP_ProductService implements ERP_ProductSrevice {
  constructor(
    @Inject(ERP_PRODUCT_REPO)
    private readonly repository,
  ) {}

  public async getProductsWithRowNumber(
    body,
  ): Promise<GetProductsResponseDto[]> {
    const { TopNum, RowNumber } = body;
    return this.repository.runQuery(productQuery(TopNum, RowNumber));
  }

  public async getProductsWithPageNumber(
    body,
  ): Promise<GetProductsResponseDto[]> {
    const { Page, PerPage } = body;
    return this.repository.runQuery(
      getProductsWithPaginationQuery(Page, PerPage),
    );
  }

  public async getProductByBarcode(body): Promise<GetProductsResponseDto[]> {
    const { Barcode } = body;
    return this.repository.runQuery(getProductByBarcodeQuery(Barcode));
  }
}
