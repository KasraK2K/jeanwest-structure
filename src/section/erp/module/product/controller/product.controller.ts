import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ERP_PRODUCT_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_ProductService } from '../service/product.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithPaginationDto,
} from '../dto/product.dto';

@ApiTags('ERP-PRODUCT')
@Controller('erp-product')
export class ERP_ProductController {
  constructor(
    @Inject(ERP_PRODUCT_SERVICE)
    private readonly erp_ProductService: ERP_ProductService,
  ) {}

  @Post('getProductsWithROwNumber')
  @ApiResponse({ type: [GetProductsResponseDto] })
  public async getProductsWithRowNumber(
    @Body() body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    return this.erp_ProductService.getProductsWithRowNumber(body);
  }

  @Post('getProductsWithPageNumber')
  @ApiResponse({ type: [GetProductsResponseDto] })
  public async getProductsWithPageNumber(
    @Body() body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    return this.erp_ProductService.getProductsWithPageNumber(body);
  }

  @Post('getProductByBarcode')
  public async getProductByBarcode(
    @Body() body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]> {
    return this.erp_ProductService.getProductByBarcode(body);
  }
}
