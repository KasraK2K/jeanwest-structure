import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
  CustomerResponseDto,
  FilterCustomerDto,
} from '../dto/customer.dto';

export interface ICustomerService {
  createCustomer(body: CreateCustomerDto): Promise<CreateCustomerResponseDto>;
  findCustomer(body: FilterCustomerDto): Promise<CustomerResponseDto>;
}
