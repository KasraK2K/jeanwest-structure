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

export interface ERP_UserSrevice {
  getUser(mobile: string): Promise<GetUserResponseDto[]>;

  updateUser(body: UpdateUserDto): Promise<UpdateUserResponseDto[]>;

  createUser(body: CreateUserDto): Promise<CreateUserResponseDto[]>;

  getCustomers(): Promise<GetCustomersResponseDto[]>;

  getUserTransactionsList(
    tblPosCustomers_ID: string,
  ): Promise<GetUserTransactionsListResponseDto[]>;

  getInvoiceDetails(
    tblPosTransactions_ID: string,
  ): Promise<getInvoiceDetailsResponseDto[]>;

  getUserGiftcards(
    tblPosTransactions_ID: string,
  ): Promise<getUserGiftcardsResponseDto[]>;
}
