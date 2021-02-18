import { Body, Controller, Get, Inject, Query } from '@nestjs/common';
import {  } from 'src/common/interface/pagination-option.interface';
import { INVENTORY_PRODUCT_SERVICE } from '../common/constant/inventory.const';
import { ReqProductFilterDto } from '../dto/request-product-filter.dto';
@Controller('product')
export class ProductController {
  constructor(
    @Inject(INVENTORY_PRODUCT_SERVICE)
    private readonly service,
  ) {}

  @Get()
  async findOne(@Body() filter: any): Promise<any> {
    return this.service.findProduct(filter);
  }

  @Get('list')
  async list(
    @Query() data: ReqProductFilterDto,
  ): Promise<any> {
    return this.service.paginateProducts(data.filter, data.option);
  }
}
