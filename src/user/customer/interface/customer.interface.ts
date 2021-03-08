import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
  CustomerResponseDto,
  GetCustomerDto,
  GetMyCustomerDto,
} from '../dto/customer.dto';

export interface CustomerServiceInterface {
  createCustomer(body: CreateCustomerDto): Promise<CreateCustomerResponseDto>;
  getCustomer(body: GetCustomerDto): Promise<CustomerResponseDto>;
  getMyCustomer(body: GetMyCustomerDto): Promise<CustomerResponseDto>;
}
