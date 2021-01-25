import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ERP_USER_REPO } from 'src/erp/common/constant/repository.const';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetCustomersResponseDto,
  GetInvoiceDetailsResponseDto,
  GetUserDto,
  GetUserGiftcardsResponseDto,
  GetUserResponseDto,
  GetUserTransactionsListResponseDto,
  UpdateUserDto,
  UpdateUserResponseDto,
} from '../dto/user.dto';
import { ERP_UserSrevice } from '../interface/user-service.interface';
import {
  createUserQuery,
  getCustomersQuery,
  getInvoiceDetailsQuery,
  getUserGiftcardsQuery,
  getUserTransactionsListQuery,
  updateUserQuery,
  userQuery,
} from '../query/raw-query';

@Injectable()
export class ERP_UserService implements ERP_UserSrevice {
  constructor(
    @Inject(ERP_USER_REPO)
    private readonly repository,
  ) {}

  async getUser(body: GetUserDto): Promise<GetUserResponseDto[]> {
    try {
      const mobile = `0${body.mobile.slice(-10)}`;
      const checkMobileInput = this.checkMobile(mobile);
      if (checkMobileInput.length === 0)
        throw new BadRequestException('Invalid phone Number');
      return this.repository.runQuery(userQuery(mobile));
    } catch (err) {
      throw err;
    }
  }

  async updateUser(body: UpdateUserDto): Promise<UpdateUserResponseDto[]> {
    try {
      return this.repository.runQuery(updateUserQuery(body));
    } catch (err) {
      throw err;
    }
  }

  async createUser(body: CreateUserDto): Promise<CreateUserResponseDto[]> {
    try {
      body.Comment = 'JeansWest App';
      return this.repository.runQuery(createUserQuery(body));
    } catch (err) {
      throw err;
    }
  }

  async getCustomers(): Promise<GetCustomersResponseDto[]> {
    try {
      return this.repository.runQuery(getCustomersQuery());
    } catch (err) {
      throw err;
    }
  }

  async getUserTransactionsList(
    tblPosCustomers_ID: string,
  ): Promise<GetUserTransactionsListResponseDto[]> {
    try {
      return this.repository.runQuery(
        getUserTransactionsListQuery(tblPosCustomers_ID),
      );
    } catch (err) {
      throw err;
    }
  }

  async getInvoiceDetails(
    tblPosTransactions_ID: string,
  ): Promise<GetInvoiceDetailsResponseDto[]> {
    try {
      const invoiceDetails = await this.repository.runQuery(
        getInvoiceDetailsQuery(tblPosTransactions_ID),
      );
      invoiceDetails.map((invoiceDetail) => {
        invoiceDetail.PayDetailsList = invoiceDetail.PayDetailsList.split(',');
        invoiceDetail.BarcodeMain_IDList = invoiceDetail.BarcodeMain_IDList.split(
          ',',
        );
        return invoiceDetail;
      });
      return invoiceDetails;
    } catch (err) {
      throw err;
    }
  }

  async getUserGiftcards(
    tblPosTransactions_ID: string,
  ): Promise<GetUserGiftcardsResponseDto[]> {
    try {
      const invoiceDetails = await this.repository.runQuery(
        getUserGiftcardsQuery(tblPosTransactions_ID),
      );
      return invoiceDetails;
    } catch (err) {
      throw err;
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
