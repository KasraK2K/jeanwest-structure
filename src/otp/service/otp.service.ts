import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { generateCode } from 'src/common/util/randomCode.util';
import {
  SMS_SERVICE,
  USER_CUSTOMER_SERVICE,
} from '../common/constant/otp.const';
import { IOtpSrevice } from '../common/interface/otp-service.interface';

@Injectable()
export class OtpService implements IOtpSrevice {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    @Inject(SMS_SERVICE)
    private readonly sms,
    @Inject(USER_CUSTOMER_SERVICE)
    private readonly user,
  ) {}
  public async requestPin(phoneNumber: string): Promise<any> {
    const lastPin: string = await this.cache.get(phoneNumber);
    if (lastPin) {
      if (parseInt(lastPin)) return { resKey: '429' };
      else {
        await this.cache.del(phoneNumber);
      }
    }
    const pin: string = await generateCode(5, 5);
    console.log({ pin });
    await this.cache.set(phoneNumber, pin, { ttl: 120 });
    await this.sms.patternSend(phoneNumber, 'otp', [pin]);
    return { resKey: '201' };
  }
}
