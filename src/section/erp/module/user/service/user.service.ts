import { Inject, Injectable } from '@nestjs/common';
import { ERP_USER_REPO } from 'src/section/erp/common/constant/repository.const';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetCustomersResponseDto,
  getInvoiceDetailsResponseDto,
  getUserGiftcardsResponseDto,
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

  async getUser(mobile: string): Promise<GetUserResponseDto[]> {
    try {
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
  ): Promise<getInvoiceDetailsResponseDto[]> {
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
  ): Promise<getUserGiftcardsResponseDto[]> {
    try {
      const invoiceDetails = await this.repository.runQuery(
        getUserGiftcardsQuery(tblPosTransactions_ID),
      );
      return invoiceDetails;
    } catch (err) {
      throw err;
    }
  }
}
