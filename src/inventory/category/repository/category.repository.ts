import { Inject, Injectable } from '@nestjs/common';
import {
  JW_PG_REPO,
  JW_TYPEORM_REPO,
} from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Category } from 'src/inventory/common/entity/typeorm/category.entity.jw';

@Injectable()
export class CategoryRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Category>,
    @Inject(JW_PG_REPO) private secondRepository: IRepo<Category>,
  ) {}

  create(data: Record<string, unknown>) {
    return this.baseRepository.create(Category, data);
  }

  findOne(data: Record<string, unknown>) {
    return this.baseRepository.findOne(Category, data);
  }
}
