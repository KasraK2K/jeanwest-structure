import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import { Customer } from 'src/user/common/entity/typeorm/customer.entity.jw';
import { CustomerService } from 'src/user/customer/service/customer.service';
import { USER_CUSTOMER_SERVICE } from '../common/constant/user.const';
import { customerProviders } from '../provider/customer.provider';
import { CustomerController } from './customer.controller';

let customerController;
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

class TestCustomerService {
  createCustomer() {
    return null;
  }
  getCustomer() {
    return null;
  }
  getMyCustomer() {
    return null;
  }
}

class TestAuthGuard {
  canActiveate() {
    return true;
  }
}

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [],
    controllers: [CustomerController],
    providers: [CustomerService, ...customerProviders, ConfigService],
  })
    .overrideProvider(CustomerService)
    .useClass(TestCustomerService)
    .overrideProvider(CUSTOMER_REPO)
    .useClass(customerRepo)
    .overrideProvider(USER_CUSTOMER_SERVICE)
    .useClass(TestCustomerService)
    .overrideProvider(AuthGuard)
    .useClass(TestAuthGuard)
    .compile();
  customerController = module.get<CustomerController>(CustomerController);
});

beforeEach(async () => {
  jest.clearAllMocks();
});

describe('CustomerController', () => {
  it('and its functions should be defined', () => {
    expect(customerController).toBeDefined();
    expect(customerController.createCustomer).toBeDefined();
    expect(customerController.getMyCustomer).toBeDefined();
  });

  it('createCustomer should be hit once', async () => {
    const data = {
      userAccountId: 1,
      firstName: 'Jafar',
      lastName: 'Jafari',
      birthDate: 'Mon Feb 15 2021 12:01:54 GMT+0330',
      gender: true,
    };

    const createCustomer = jest.fn(customerController.createCustomer);
    jest
      .spyOn(customerController, 'createCustomer')
      .mockImplementation(createCustomer);

    await customerController.createCustomer(data);
    expect(createCustomer).toBeCalledTimes(1);
  });

  it('getMyCustomer should be hit once', async () => {
    const data = {
      userAccountId: 1,
    };

    const getMyCustomer = jest.fn(customerController.getMyCustomer);
    jest
      .spyOn(customerController, 'getMyCustomer')
      .mockImplementation(getMyCustomer);

    await customerController.getMyCustomer(data);
    expect(getMyCustomer).toBeCalledTimes(1);
  });
});
