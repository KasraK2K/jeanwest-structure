import { Controller, Get, HttpCode, Inject, UseFilters } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AllExceptionsFilter } from 'src/gateway/common/filter/exception.filter';
import { INVENTORY_CATEGORY_SERVICE } from '../common/constant/inventory.const';
import { ResCategoryDto } from '../dto/response-category.dto';
import errorHandler from 'src/common/error/error.handler';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(INVENTORY_CATEGORY_SERVICE)
    private readonly service,
  ) {}

  @Get('list')
  async list(): Promise<ResCategoryDto> {
    const result = await this.service.list();
    return plainToClass(ResCategoryDto, result);
  }
}
