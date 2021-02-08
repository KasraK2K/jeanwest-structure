import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';
import { OTP_SERVICE } from '../common/constant/otp.const';

@Controller('otp')
@UseGuards(AuthGuard)
export class OtpController {
  constructor(
    @Inject(OTP_SERVICE)
    private readonly otp,
  ) {}

  @Post('request')
  async requestPin(@Body() input: any): Promise<any> {
    return this.otp.requestPin(input.phoneNumber);
  }
}
