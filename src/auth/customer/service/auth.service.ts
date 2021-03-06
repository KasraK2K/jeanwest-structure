import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { USER_CUSTOMER_SERVICE } from 'src/auth/common/const/customer-auth.const';

@Injectable()
export class CustomerAuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    @Inject(USER_CUSTOMER_SERVICE)
    private readonly customerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(phoneNumber: string, pin: string): Promise<any> {
    const cachedPin = await this.cache.get(phoneNumber);
    if (cachedPin === pin) {
      await this.cache.del(phoneNumber);
      let customer = await this.customerService.findCustomer({
        phoneNumber,
      });
      if (!customer)
        customer = await this.customerService.createCustomer({
          phoneNumber,
        });
      return customer.id;
    } else {
      //todo error 403
    }
    return null;
  }

  async authentication(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user.userId };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
