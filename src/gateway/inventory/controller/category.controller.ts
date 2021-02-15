import { Controller, Get, Inject } from '@nestjs/common';
import { INVENTORY_CATEGORY_SERVICE } from '../common/constant/inventory.const';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(INVENTORY_CATEGORY_SERVICE)
    private readonly service,
  ) {}

  @Get('list')
  async list(): Promise<any> {
    return this.service.list();
  }
}
