import { Body, Controller, Get, Inject, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import {  } from 'src/common/interface/pagination-option.interface';
import { IPaginate } from 'src/common/interface/pagination.interface';
import { INVENTORY_PRODUCT_SERVICE } from '../common/constant/inventory.const';
import { ReqProductFilterDto } from '../dto/req-product-filter.dto';
import { ResProductFilterDto } from '../dto/res-product-filter.dto';
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
  ): Promise<IPaginate<ResProductFilterDto>> {
    const result = await this.service.paginateProducts(data.filter, data.option);
    result.result = plainToClass(ResProductFilterDto, result.result);
    return result;
  }
}
