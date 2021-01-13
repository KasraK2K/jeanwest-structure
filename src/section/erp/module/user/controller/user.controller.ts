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

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetCustomersResponseDto,
  getInvoiceDetailsResponseDto,
  GetUserDto,
  getUserGiftcardsResponseDto,
  GetUserResponseDto,
  GetUserTransactionsListDto,
  GetUserTransactionsListResponseDto,
} from '../dto/user.dto';

@ApiTags('ERP-USER')
@Controller('api/v1/erp/user')
export class ERP_UserController {
  constructor(
    @Inject(ERP_USER_SERVICE)
    private readonly erpUserService: ERP_UserService,
  ) {}

  @Post('/user')
  @ApiResponse({ type: [GetUserResponseDto] })
  async getUser(@Body() body: GetUserDto): Promise<GetUserResponseDto[]> {
    try {
      const mobile = `0${body.mobile.slice(-10)}`;
      const checkMobileInput = this.checkMobile(mobile);
      if (checkMobileInput.length === 0)
        throw new BadRequestException('Invalid phone Number');
      return this.erpUserService.getUser(mobile);
    } catch (err) {
      return err;
    }
  }

  @Get('/customers')
  @ApiResponse({ type: [GetCustomersResponseDto] })
  async getCustomer(): Promise<GetCustomersResponseDto[]> {
    try {
      return this.erpUserService.getCustomers();
    } catch (err) {
      return err;
    }
  }

  @Post('/userTransactionsList')
  @ApiResponse({ type: [GetUserTransactionsListResponseDto] })
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
  @ApiResponse({ type: [getInvoiceDetailsResponseDto] })
  async restGetInvoiceDetail(
    @Body() body: GetUserTransactionsListDto,
  ): Promise<getInvoiceDetailsResponseDto[]> {
    try {
      return this.erpUserService.getInvoiceDetails(body.tblPosCustomers_ID);
    } catch (err) {
      return err;
    }
  }

  @Post('/userGiftcards')
  @ApiResponse({ type: [getUserGiftcardsResponseDto] })
  async getUserGiftcards(
    @Body() body: GetUserTransactionsListDto,
  ): Promise<getUserGiftcardsResponseDto[]> {
    try {
      return this.erpUserService.getUserGiftcards(body.tblPosCustomers_ID);
    } catch (err) {
      return err;
    }
  }

  checkMobile = function (str: string) {
    const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      junkReg = /[^\d]/gi,
      persinNum = [
        /۰/gi,
        /۱/gi,
        /۲/gi,
        /۳/gi,
        /۴/gi,
        /۵/gi,
        /۶/gi,
        /۷/gi,
        /۸/gi,
        /۹/gi,
      ],
      num2en = function (str) {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persinNum[i], i);
        }
        return str;
      };
    const mobiles = num2en(str + '').match(mobileReg) || [];
    mobiles.forEach(function (value, index, arr) {
      arr[index] = value.replace(junkReg, '');
      arr[index][0] === '0' || (arr[index] = '0' + arr[index]);
    });
    return mobiles;
  };
}
