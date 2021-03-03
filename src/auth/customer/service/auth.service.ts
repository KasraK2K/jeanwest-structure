import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { USER_CUSTOMER_SERVICE } from 'src/auth/common/const/customer-auth.const';

@Injectable()
export class CustomerAuthService {
  constructor(
    @Inject(USER_CUSTOMER_SERVICE)
    private readonly customerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(phoneNumber: string, pin: string): Promise<any> {
    const customer = await this.customerService.findOne({
      phoneNumber,
    });
    // const customer = await this.customerService.createCustomer();
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  async authentication(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
