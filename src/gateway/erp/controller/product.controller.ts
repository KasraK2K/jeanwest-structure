import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ERP_PRODUCT_SERVICE } from 'src/erp/common/constant/service.const';
import {
  GetProductsWithFilterDto,
  GetProductsResponseDto,
  GetProductsWithtsCodeIdDto,
  GetProductsDto,
  GetProductsWithPaginationDto,
  GetProductByBarcodeDto,
} from 'src/erp/product/dto/product.dto';
import { ErpProductService } from 'src/erp/product/service/product.service';

@Controller('api/v1/erp/product')
export class ErpProductController {
  constructor(
    @Inject(ERP_PRODUCT_SERVICE)
    private readonly erpProductService: ErpProductService,
  ) {}

  @Post('getProductsWithFilters')
  public async getProductsWithtfilter(
    @Body() body: GetProductsWithFilterDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erpProductService.getProductsWithtfilter(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithTSCodeID')
  public async getProductsWithtsCodeId(
    @Body() body: GetProductsWithtsCodeIdDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erpProductService.getProductsWithtsCodeId(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithROwNumber')
  public async getProductsWithRowNumber(
    @Body() body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erpProductService.getProductsWithRowNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithPageNumber')
  public async getProductsWithPageNumber(
    @Body() body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erpProductService.getProductsWithPageNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productByBarcode')
  public async getProductByBarcode(
    @Body() body: GetProductByBarcodeDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      return this.erpProductService.getProductByBarcode(body);
    } catch (err) {
      throw err;
    }
  }
}
