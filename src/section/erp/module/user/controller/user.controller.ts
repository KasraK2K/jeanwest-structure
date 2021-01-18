import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { ERP_USER_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_UserService } from '../service/user.service';

import {
  GetCustomersResponseDto,
  GetInvoiceDetailsResponseDto,
  GetUserDto,
  GetUserGiftcardsResponseDto,
  GetUserResponseDto,
  GetUserTransactionsListDto,
  GetUserTransactionsListResponseDto,
} from '../dto/user.dto';

@Controller('api/v1/erp/user')
export class ERP_UserController {
  constructor(
    @Inject(ERP_USER_SERVICE)
    private readonly erpUserService: ERP_UserService,
  ) {}

  @Post('/user')
  async getUser(@Body() body: GetUserDto): Promise<GetUserResponseDto[]> {
    try {
      return this.erpUserService.getUser(body);
    } catch (err) {
      return err;
    }
  }

  @Get('/customers')
  async getCustomer(): Promise<GetCustomersResponseDto[]> {
    try {
      return this.erpUserService.getCustomers();
    } catch (err) {
      return err;
    }
  }

  @Post('/userTransactionsList')
  async getUserTransactionsList(
    @Body() body: GetUserTransactionsListDto,
  ): Promise<GetUserTransactionsListResponseDto[]> {
    try {
      return this.erpUserService.getUserTransactionsList(
        body.tblPosCustomers_ID,
      );
    } catch (err) {
      return err;
    }
  }

  @Post('/invoiceDetails')
  async restGetInvoiceDetail(
    @Body() body: GetUserTransactionsListDto,
  ): Promise<GetInvoiceDetailsResponseDto[]> {
    try {
      return this.erpUserService.getInvoiceDetails(body.tblPosCustomers_ID);
    } catch (err) {
      return err;
    }
  }

  @Post('/userGiftcards')
  async getUserGiftcards(
    @Body() body: GetUserTransactionsListDto,
  ): Promise<GetUserGiftcardsResponseDto[]> {
    try {
      return this.erpUserService.getUserGiftcards(body.tblPosCustomers_ID);
    } catch (err) {
      return err;
    }
  }
}
