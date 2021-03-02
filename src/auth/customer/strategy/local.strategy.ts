import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_AUTH_SERVICE } from 'src/auth/common/const/customer-auth.const';

@Injectable()
export class CustomerLocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(CUSTOMER_AUTH_SERVICE)
    private readonly authService,    ) {
    super();
  }

  async validate(phoneNumber: string, pin: string): Promise<any> {
    const user = await this.authService.validateUser(phoneNumber, pin);
    if (!user) {
      //todo throw unauthorized user error
    }
    return user;
  }
}