import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';
import { UserAuth } from 'src/user/common/entity/typeorm/user-auth.entity.jw';
import { USER_ACCOUNT_SERVICE } from '../common/constant/user.const';

@Controller('account')
export class UserAuthController {
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
  @Get('myUserAuth')
  async getMyUserAuth(@Body() body: Record<string, never>): Promise<UserAuth> {
    try {
      return this.accountService.getMyUserAuth(body);
    } catch (err) {}
  }
}
