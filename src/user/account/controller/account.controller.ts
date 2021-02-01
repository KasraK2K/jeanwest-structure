import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { PERSON_ACCOUNT_SERVICE } from 'src/user/common/constant/service.const';
import { AccountService } from 'src/user/account/service/account.service';
import { Account, LoginDto, LoginResponseDto } from '../dto/account.dto';

@Controller('api/v1/account')
export class AccountController {
  constructor(
    @Inject(PERSON_ACCOUNT_SERVICE)
    private readonly accountService: AccountService,
  ) {}

  @Get('/accounts')
  async getAccounts(): Promise<Account[]> {
    try {
      return this.accountService.getAccounts();
    } catch (err) {}
  }

  @Post('/account')
  async getAccount(@Body() body: { id: string | number }): Promise<Account> {
    try {
      const account = await this.accountService.getAccountById(body);
      console.log({ 'In controller': account });

      return account;
    } catch (err) {}
  }

  @Post('/accountByMobile')
  async getAccountByMobile(@Body() body: { mobile: string }): Promise<Account> {
    try {
      const account = await this.accountService.getAccountByMobile(body);
      return account;
    } catch (err) {}
  }

  @Post('/login')
  async login(@Body() body: LoginDto): Promise<LoginResponseDto> {
    try {
      const account = await this.accountService.login(body);
      return account;
    } catch (err) {}
  }
}
