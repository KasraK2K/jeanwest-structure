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
    let products = await this.repository.runQuery(
      getProductsWithtsCodeIdQuery(TopNum, TsCodeId),
    );
    products = this.productMapper(products);
    return products;
  }

  public async getProductsWithRowNumber(
    body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    const { TopNum, RowNumber } = body;
    let products = await this.repository.runQuery(
      productQuery(TopNum, RowNumber),
    );
    products = this.productMapper(products);
    return products;
  }

  public async getProductsWithPageNumber(
    body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    const { Page, PerPage } = body;
    let products = await this.repository.runQuery(
      getProductsWithPaginationQuery(Page, PerPage),
    );
    products = this.productMapper(products);
    return products;
  }

  public async getProductByBarcode(
    body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]> {
    const { Barcode } = body;
    return this.repository.runQuery(getProductByBarcodeQuery(Barcode));
  }

  private productMapper(products) {
    products.map((product) => {
      product.SearchCode = product.SearchCode
        ? product.SearchCode.split(',')
        : [];
      return product;
    });
    return products;
  }
}
