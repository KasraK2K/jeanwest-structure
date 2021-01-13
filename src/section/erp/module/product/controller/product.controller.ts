import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
} from '@nestjs/common';
import { ERP_PRODUCT_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_ProductService } from '../service/product.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetProductByBarcodeDto,
  GetProductsDto,
  GetProductsResponseDto,
  GetProductsWithPaginationDto,
  GetProductsWithtsCodeIdDto,
} from '../dto/product.dto';
import { isNumber } from 'class-validator';

@ApiTags('ERP-PRODUCT')
@Controller('api/v1/erp/product')
export class ERP_ProductController {
  constructor(
    @Inject(ERP_PRODUCT_SERVICE)
    private readonly erp_ProductService: ERP_ProductService,
  ) {}

  @Post('productsWithTSCodeID')
  @ApiResponse({ type: [GetProductsResponseDto] })
  public async getProductsWithtsCodeId(
    @Body() body: GetProductsWithtsCodeIdDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      if (body.TopNum < 0)
        throw new BadRequestException('Invalid TopNum value');
      if (isNaN(Number(body.TsCodeId)))
        throw new BadRequestException('Invalid tsCodeId value');
      return this.erp_ProductService.getProductsWithtsCodeId(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithROwNumber')
  @ApiResponse({ type: [GetProductsResponseDto] })
  public async getProductsWithRowNumber(
    @Body() body: GetProductsDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      if (body.TopNum < 0)
        throw new BadRequestException('Invalid TopNum value');
      if (body.RowNumber < 0)
        throw new BadRequestException('Invalid RowNumber value');
      return this.erp_ProductService.getProductsWithRowNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productsWithPageNumber')
  @ApiResponse({ type: [GetProductsResponseDto] })
  public async getProductsWithPageNumber(
    @Body() body: GetProductsWithPaginationDto,
  ): Promise<GetProductsResponseDto[]> {
    try {
      if (body.Page < 0 || body.PerPage < 0)
        throw new BadRequestException('Invalid input');

      return this.erp_ProductService.getProductsWithPageNumber(body);
    } catch (err) {
      throw err;
    }
  }

  @Post('productByBarcode')
  @ApiResponse({ type: [GetProductsResponseDto] })
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
