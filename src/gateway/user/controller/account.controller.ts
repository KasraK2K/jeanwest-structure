import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';
import { AccountDto } from 'src/user/account/dto/account.dto';
import { USER_ACCOUNT_SERVICE } from '../common/constant/user.const';

@Controller('account')
export class AccountController {
  constructor(
    @Inject(USER_ACCOUNT_SERVICE)
    private readonly accountService,
  ) {}

  @Post('authentication')
  async authentication(
    @Body() body: { mobile: string; pin: string },
  ): Promise<any> {
    return this.accountService.authentication(body);
  }

  @UseGuards(AuthGuard)
  @Get('myAccount')
  async getMyAccount(@Body() body: Record<string, never>): Promise<Account> {
    try {
      return this.accountService.getMyAccount(body);
    } catch (err) {}
  }
}
