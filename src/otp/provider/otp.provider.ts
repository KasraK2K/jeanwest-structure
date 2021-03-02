import {
  OTP_SERVICE,
  SMS_SERVICE,
  USER_CUSTOMER_SERVICE,
} from 'src/otp/common/constant/otp.const';
import { SmsService } from 'src/sms/service/sms.service';
import { CustomerModule } from 'src/user/user.module';
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
