import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { SMS_SERVICE, SMS_TYPEORM_REPO } from '../common/const/sms.const';
import { SmsRepository } from '../repository/sms.repository';
import { SmsService } from '../service/sms.service';

export const smsProviders = [
  {
    provide: SMS_SERVICE,
    useClass: SmsService,
  },
  {
    provide: SMS_TYPEORM_REPO,
    useClass: SmsRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
