import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { generateCode } from 'src/common/util/randomCode.util';
import { SMS_SERVICE } from 'src/gateway/otp/common/constant/otp.const';
import { IOtpSrevice } from '../common/interface/otp-service.interface';

@Injectable()
export class OtpService implements IOtpSrevice {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    @Inject(SMS_SERVICE)
    private readonly sms,
  ) {}
  public async requestPin(phoneNumber: string): Promise<any> {
    const pin: string = await generateCode(5, 5);
    await this.cache.set(phoneNumber, pin, { ttl: 13000 });
    await this.sms.patternSend(phoneNumber, 'otp', [pin]);
    return { data: {} };
  }

  public async verifyPin(phoneNumber: string, pin: string): Promise<any> {
    const currectPin: string = await this.cache.get(phoneNumber);
    // register or login TODO
    if (currectPin === pin)
      await this.cache.set(phoneNumber, 'JWT_TOKEN', { ttl: 86400 });
    else {
      return { data: 'not valid' };
    }
    return { data: 'logined' };
  }
}
