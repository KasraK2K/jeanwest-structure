import { Test, TestingModule } from '@nestjs/testing';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import { Customer } from 'src/user/common/entity/typeorm/customer.entity.jw';
import { ICustomerService } from '../interface/customer.interface';
import { customerProviders } from '../provider/customer.provider';
import { CustomerService } from './customer.service';

let customerService;
const customer: Array<Customer> = [];

class customerRepo {
  async create(data): Promise<Customer> {
    const promise: Promise<Customer> = new Promise((resolve, reject) => {
      const result = { id: 1, ...data };
      resolve(result);
    });
    return promise;
  }

  async findOne(data): Promise<Customer> {
    const promise = await new Promise((resolve, reject) => {
      const result = customer.find(
        (el) => el.id === data.condition.userAccountId,
      );
      resolve(result);
    });
    return (promise as unknown) as Customer;
  }
}

const repo = new customerRepo();

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [],
    controllers: [],
    providers: [CustomerService, ...customerProviders],
  })
    .overrideProvider(CUSTOMER_REPO)
    // .useClass(repo)
    .useValue(repo)
    .compile();
  customerService = module.get<ICustomerService>(CustomerService);
});

beforeEach(async () => {
  jest.clearAllMocks();
});

describe('CustomerService', () => {
  it('should be defined', () => {
    expect(customerService).toBeDefined();
  });

  it('should create a customer', async () => {
    const data = {
      userAccountId: 1,
      firstName: 'Jafar',
      lastName: 'Jafari',
      birthDate: 'Mon Feb 15 2021 12:01:54 GMT+0330',
      gender: true,
    };
    const create = jest.fn(repo.create);
    jest.spyOn(customerService.repository, 'create').mockImplementation(create);

    customer.push(await customerService.createCustomer(data));

    expect(create).toBeCalledTimes(1);
    expect(customer[0].id).toBeDefined();
  });

  it('should find the customer', async () => {
    const data = {
      condition: { userAccountId: 1 },
    };

    const findOne = jest.fn(repo.findOne);
    jest
      .spyOn(customerService.repository, 'findOne')
      .mockImplementation(findOne);

    const response = await customerService.findCustomer(data);
    expect(response).toBeDefined();
    expect(findOne).toBeCalledTimes(1);
  });
});
