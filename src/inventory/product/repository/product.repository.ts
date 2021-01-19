import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Product } from '../../common/entity/typeorm/product.entity.jw';

@Injectable()
export class ProductRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Product>,
  ) {}
  create(data: Record<string, unknown>) {
    return this.baseRepository.create(Product, data);
  }
  findOne(data: Record<string, unknown>) {
    return this.baseRepository.findOne(Product, data);
  }
}
