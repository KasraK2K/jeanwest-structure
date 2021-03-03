import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
} from '../dto/customer.dto';

export interface CustomerServiceInterface {
  createCustomer(body: CreateCustomerDto): Promise<CreateCustomerResponseDto>;
}
