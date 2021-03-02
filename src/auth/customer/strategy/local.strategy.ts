import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { CustomerAuthService } from '../service/auth.service';

@Injectable()
export class CustomerLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: CustomerAuthService) {
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