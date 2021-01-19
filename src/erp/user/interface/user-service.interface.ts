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

export interface ERP_UserSrevice {
  getUser(body: GetUserDto): Promise<GetUserResponseDto[]>;

  updateUser(body: UpdateUserDto): Promise<UpdateUserResponseDto[]>;

  createUser(body: CreateUserDto): Promise<CreateUserResponseDto[]>;

  getCustomers(): Promise<GetCustomersResponseDto[]>;

  getUserTransactionsList(
    tblPosCustomers_ID: string,
  ): Promise<GetUserTransactionsListResponseDto[]>;

  getInvoiceDetails(
    tblPosTransactions_ID: string,
  ): Promise<GetInvoiceDetailsResponseDto[]>;

  getUserGiftcards(
    tblPosTransactions_ID: string,
  ): Promise<GetUserGiftcardsResponseDto[]>;
}
