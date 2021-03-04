import { Test, TestingModule } from '@nestjs/testing';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import { Customer } from 'src/user/common/entity/typeorm/customer.entity.jw';
import { CustomerServiceInterface } from '../interface/customer.interface';
import { customerProviders } from '../provider/customer.provider';
import { CustomerService } from './customer.service';

let customerService;
const customer: Array<Customer> = [];

class customerRepo {
  async create(data): Promise<Customer> {
    const promise = await new Promise((resolve, reject) => {
      const result = { id: 1, ...data };
      resolve(result);
    });
    return (promise as unknown) as Customer;
  }

  async findMany(): Promise<Array<Customer>> {
    const promise = await new Promise((resolve, reject) => {
      const result = customer;
      resolve(result);
    });
    return (promise as unknown) as Customer[];
  }

  async findOne(data): Promise<Customer> {
    const promise = await new Promise((resolve, reject) => {
      const result = customer.some((el) => el.id === data.id);
      resolve(result);
    });
    return (promise as unknown) as Customer;
  }
}

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [],
    controllers: [],
    providers: [CustomerService, ...customerProviders],
  })
    .overrideProvider(CUSTOMER_REPO)
    .useClass(customerRepo)
    .compile();
  customerService = module.get<CustomerServiceInterface>(CustomerService);
});

describe('CustomerService', () => {
  it('CustomerService should be defined', () => {
    expect(customerService).toBeDefined();
  });

  it('createCustomer should work', async () => {
    const data = {
      userAccountId: 1,
      firstName: 'Jafar',
      lastName: 'Jafari',
      birthDate: 'Mon Feb 15 2021 12:01:54 GMT+0330',
      gender: true,
    };
    customer.push(await customerService.createCustomer(data));
    expect(customer[0].id).toBeDefined();
  });

  it('createCustomer should not register duplicate entry', async () => {
    try {
      const data = {
        userAccountId: 1,
        firstName: 'Jafar',
        lastName: 'Jafari',
        birthDate: 'Mon Feb 15 2021 12:01:54 GMT+0330',
        gender: true,
      };
      await customerService.createCustomer(data);
    } catch (err) {
      expect(err.message).toBe(
        'This userAuth has already a user registered to it',
      );
    }
  });

  it('getCustomer should work', async () => {
    const data = {
      condition: { userAccountId: 1 },
    };
    const response = await customerService.getCustomer(data);
    expect(response).toBeDefined();
  });
});
