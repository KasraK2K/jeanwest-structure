import { OTP_SERVICE, SMS_SERVICE, USER_SERVICE } from 'src/otp/common/constant/otp.const';
import { SmsService } from 'src/sms/service/sms.service';
import { AccountService } from 'src/user/account/service/account.service';
import { UserModule } from 'src/user/user.module';
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
  {
    provide: USER_SERVICE,
    useClass: AccountService,
  },
];
