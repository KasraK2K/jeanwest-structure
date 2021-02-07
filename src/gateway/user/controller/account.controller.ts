import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
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
}
