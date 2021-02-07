import { OtpService } from 'src/otp/service/otp.service';
import { OTP_SERVICE } from '../common/constant/otp.const';

export const otpProviders = [
  {
    provide: OTP_SERVICE,
    useClass: OtpService,
  },
];
