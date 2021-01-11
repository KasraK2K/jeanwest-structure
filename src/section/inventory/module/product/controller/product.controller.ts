import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseArrayPipe,
  Post,
  Query,
} from '@nestjs/common';
import { PRODUCT_SERVICE } from 'src/section/inventory/common/constant/service.const';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { ProductDto } from '../dto/product.dto';
import { IProductSrevice } from '../interface/proudct-service.interface';
@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private readonly productService: IProductSrevice,
  ) {}

  @Get('read')
  public async readSingle(@Body() data: FilterDto): Promise<any> {
    return await this.productService.findProduct(data);
  }

  @Post('erp-single')
  public async createOneByErp(
    @Body() data: RawErpProductDto,
  ): Promise<ProductDto> {
    return await this.productService.createErpProduct(data);
  }
}
