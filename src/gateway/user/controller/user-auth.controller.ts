import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';
import { UserAuth } from 'src/user/common/entity/typeorm/user-auth.entity.jw';
import { USER_USER_AUTH_SERVICE } from '../common/constant/user.const';

@Controller('userAuth')
export class UserAuthController {
  constructor(
    @Inject(USER_USER_AUTH_SERVICE)
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
