import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
  CustomerResponseDto,
  FilterCustomerDto,
} from '../dto/customer.dto';
import { CustomerServiceInterface } from '../interface/customer.interface';

@Injectable()
export class CustomerService implements CustomerServiceInterface {
  constructor(
    @Inject(CUSTOMER_REPO)
    private readonly repository,
  ) {}

  async createCustomer(
    body: CreateCustomerDto,
  ): Promise<CreateCustomerResponseDto> {
    return this.repository.create(body);
  }

  async getCustomer(body: FilterCustomerDto): Promise<CustomerResponseDto> {
    return this.repository.findOne(body);
  }
}
