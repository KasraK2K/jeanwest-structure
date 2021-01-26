import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ERP_PRODUCT_REPO } from 'src/erp/common/constant/repository.const';
import {
  FilterKey,
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithFilterDto,
  GetProductsWithPaginationDto,
  GetProductsWithtsCodeIdDto,
} from '../dto/product.dto';
import { ERP_ProductSrevice } from '../interface/product-service.interface';
import {
  getProductByBarcodeQuery,
  getProductsWithPaginationQuery,
  getProductsWithtfilterQuery,
  getProductsWithtsCodeIdQuery,
  productQuery,
} from '../query/raw-query';

@Injectable()
export class ERP_ProductService implements ERP_ProductSrevice {
  constructor(
    @Inject(ERP_PRODUCT_REPO)
    private readonly repository,
  ) {}

  public async getProductsWithtfilter(
    body: GetProductsWithFilterDto,
  ): Promise<GetProductsResponseDto[]> {
    const { FiltersArr = [], PerPage = 20, PageNumber = 1 } = body;

    if (
      (body.PageNumber < 1,
      body.PerPage < 0,
      isNaN(Number(body.PerPage)) || isNaN(Number(body.PageNumber)))
    )
      throw new BadRequestException('Invalid pageNumber or pageNumber number');

    const { OrderBy = 'Cast(B.TSCode AS bigint)' } = body;

    const Filters = {
      BarcodeMain_ID: `= null`,
      Style: `= null`,
      SKU: `= null`,
      Barcode: `= null`,
      Color: `= null`,
      ColorFamily: `= null`,
      ColorEnTitle: `= null`,
      Size: `= null`,
      CategoriesTitle: `= null`,
      ProductName: `= null`,
      ProductStyletitle: `= null`,
      ProductStyleTitleEN: `= null`,
      MaterialTitle: `= null`,
      SexTitle: `= null`,
      SeasonCode: `= null`,
      SeasonCode2: `= null`,
      ProductAge: `= null`,
      ProductCutting: `= null`,
      OrgPrice: `= null`,
      SalePrice: `= null`,
      Brand: `= null`,
      ProductGroup: `= null`,
      ProductCategory: `= null`,
    };

    FiltersArr.forEach(
      (filter) => (Filters[filter.key] = ` = '${filter.value}'`),
    );

    const query = getProductsWithtfilterQuery({
      PageNumber,
      PerPage,
      OrderBy,
      Filters,
    });

    let products = await this.repository.runQuery(query);
    products = this.productMapper(products);

    return products;
  }

  public async getProductsWithtsCodeId(
    body: GetProductsWithtsCodeIdDto,
  ): Promise<GetProductsResponseDto[]> {
    if (body.TopNum < 0) throw new BadRequestException('Invalid TopNum value');
    if (isNaN(Number(body.TsCodeId)))
      throw new BadRequestException('Invalid tsCodeId value');
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
    if (body.TopNum < 0) throw new BadRequestException('Invalid TopNum value');
    if (body.RowNumber < 0)
      throw new BadRequestException('Invalid RowNumber value');
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
    if (body.Page < 0 || body.PerPage < 0)
      throw new BadRequestException('Invalid input');

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
