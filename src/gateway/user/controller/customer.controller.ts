import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';

import { USER_CUSTOMER_SERVICE } from 'src/user/common/constant/service.const';

import { CustomerService } from 'src/user/customer/service/customer.service';

import {
  CreateCustomerDto,
  GetMyCustomerDto,
  CustomerResponseDto,
} from 'src/user/customer/dto/customer.dto';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(
    @Inject(USER_CUSTOMER_SERVICE)
    private readonly customerService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('createCustomer')
  async createCustomer(
    @Body() body: CreateCustomerDto,
  ): Promise<CreateCustomerDto> {
    return this.customerService.createCustomer(body);
  }

  @UseGuards(AuthGuard)
  @Get('myCustomer')
  async getMyCustomer(
    @Body() body: GetMyCustomerDto,
  ): Promise<CustomerResponseDto> {
    try {
      return this.customerService.getCustomer(body);
    } catch (err) {
      return err;
    }
  }
}
