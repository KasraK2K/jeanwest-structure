import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
  CustomerResponseDto,
  FilterCustomerDto,
} from '../dto/customer.dto';
import { ICustomerService } from '../interface/customer.interface';

@Injectable()
export class CustomerService implements ICustomerService {
  constructor(
    @Inject(CUSTOMER_REPO)
    private readonly repository,
  ) {}

  async createCustomer(
    body: CreateCustomerDto,
  ): Promise<CreateCustomerResponseDto> {
<<<<<<< HEAD
    return this.repository.create(body);
=======
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');

      body.userAuthId = body.userAccountId;

      //? Check duplicate Customer with userAuth
      const checkCustomer = await this.getCustomer({
        condition: {
          id: body.userAuthId,
        },
      });
      if (checkCustomer) {
        throw new ForbiddenException(
          'This userAuth has already a user registered to it',
        );
      }
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getCustomer(body: GetCustomerDto): Promise<CustomerResponseDto> {
    try {
      return this.repository.findOne(body.condition);
    } catch (err) {
      throw err;
    }
>>>>>>> Test/possible-customer-service-test-completed
  }

  async findCustomer(body: FilterCustomerDto): Promise<CustomerResponseDto> {
    return this.repository.findOne(body);
  }
}
