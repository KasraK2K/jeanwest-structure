import { Test, TestingModule } from '@nestjs/testing';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import { Customer } from 'src/user/common/entity/typeorm/customer.entity.jw';
import { CustomerServiceInterface } from '../interface/customer.interface';
import { userProviders } from '../provider/customer.provider';
import { CustomerService } from './customer.service';

let customerService;

class customerRepo {
  async create(): Promise<Customer> {
    return null;
  }

  findMany(): Promise<Array<Customer>> {
    return null;
  }

  findOne(): Promise<Customer> {
    return null;
  }
}

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [],
    controllers: [],
    providers: [CustomerService, ...userProviders],
  })
    .overrideProvider(CUSTOMER_REPO)
    .useClass(customerRepo)
    .compile();
  customerService = module.get<CustomerServiceInterface>(CustomerService);
});

describe('CustomerService', () => {
  it('customerService should be defined', () => {
    expect(customerService).toBeDefined();
  });
});
