import { Body, Controller, Inject, Post } from '@nestjs/common';
import { OTP_SERVICE } from '../common/constant/otp.const';

@Controller('otp')
export class OtpController {
  constructor(
    @Inject(OTP_SERVICE)
    private readonly otp,
  ) {}

  @Post('request')
  async requestPin(@Body() input: any): Promise<any> {
    return this.otp.requestPin(input.phoneNumber);
  }

  @Post('verify')
  async verifyPin(@Body() input: any): Promise<any> {
    return this.otp.verifyPin(input.phoneNumber, input.pin);
  }
}
