import { Body, Controller, Get, Inject } from '@nestjs/common';
import { INVENTORY_PRODUCT_SERVICE } from '../common/constant/inventory.const';

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
}
