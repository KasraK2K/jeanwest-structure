import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE } from 'src/common/constant/cache.const';
import { generateCode } from 'src/common/util/randomCode.util';
import { IOtpSrevice } from '../interface/otp-service.interface';

@Injectable()
export class OtpService implements IOtpSrevice {
  constructor(
    @Inject(CACHE)
    private readonly cache: Cache,
  ) {}
  public async requestPin(phoneNumber: string): Promise<any> {
    const pin: string = await generateCode(5,5);
    await this.cache.set(phoneNumber, pin, { ttl: 13000 });
  } 

  public async verifyPin(phoneNumber: string, pin: string): Promise<any> {
    console.log("pass");
  }
}
