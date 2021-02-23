import { Controller, Get, Inject } from '@nestjs/common';
import { INVENTORY_CATEGORY_SERVICE } from '../common/constant/inventory.const';
import { ResCategoryDto } from '../dto/response-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(INVENTORY_CATEGORY_SERVICE)
    private readonly service,
  ) {}

  @Get('list')
  async list(): Promise<ResCategoryDto> {
    return this.service.list();
  }
}