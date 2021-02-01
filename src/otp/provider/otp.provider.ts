import { CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OTP_SERVICE } from 'src/gateway/otp/common/constant/otp.const';
import { SMS_SERVICE } from 'src/sms/common/const/sms.const';
import { SmsService } from 'src/sms/service/sms.service';
import { SmsModule } from 'src/sms/sms.module';
import { OtpService } from '../service/otp.service';

export const otpProviders = [
  {
    provide: OTP_SERVICE,
    useClass: OtpService,
  },
  {
    provide: SMS_SERVICE,
    useClass: SmsService,
  },
];
