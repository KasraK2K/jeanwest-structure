import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Customer } from 'src/user/common/entity/typeorm/customer.entity.jw';

@Injectable()
export class CustomerRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Customer>,
  ) {}
  create(data: Record<string, unknown>): Promise<Customer> {
    return this.baseRepository.create(Customer, data);
  }

  findMany(): Promise<Array<Customer>> {
    return this.baseRepository.findMany(Customer);
  }

  findOne(data: Record<string, unknown>): Promise<Customer> {
    return this.baseRepository.findOne(Customer, data);
  }
}
