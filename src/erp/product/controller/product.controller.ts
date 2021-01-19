import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ERP_PRODUCT_SERVICE } from 'src/erp/common/constant/service.const';
import { ERP_ProductService } from '../service/product.service';

import {
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithPaginationDto,
  GetProductsWithtsCodeIdDto,
} from '../dto/product.dto';

@Controller('api/v1/erp/product')
export class ERP_ProductController {
  constructor(
    @Inject(ERP_PRODUCT_SERVICE)
    private readonly erp_ProductService: ERP_ProductService,
  ) {}

  @Post('productsWithTSCodeID')
  public async getProductsWithtsCodeId(
    @Body() body: GetProductsWithtsCodeIdDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erp_ProductService.getProductsWithtsCodeId(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithROwNumber')
  public async getProductsWithRowNumber(
    @Body() body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erp_ProductService.getProductsWithRowNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithPageNumber')
  public async getProductsWithPageNumber(
    @Body() body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erp_ProductService.getProductsWithPageNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productByBarcode')
  public async getProductByBarcode(
    @Body() body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erp_ProductService.getProductByBarcode(body);
    } catch (err) {
      throw err;
    }
  }
}
