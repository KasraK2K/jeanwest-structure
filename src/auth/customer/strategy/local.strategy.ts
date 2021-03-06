import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { CUSTOMER_AUTH_SERVICE } from 'src/auth/common/const/customer-auth.const';
import { Strategy } from 'passport-local';

@Injectable()
export class CustomerLocalStrategy extends PassportStrategy(
  Strategy,
  'customerLocal',
) {
  constructor(
    @Inject(CUSTOMER_AUTH_SERVICE)
    private readonly authService,
  ) {
    super({
      usernameField: 'phoneNumber',
      passwordField: 'pin',
    });
  }

  async validate(phoneNumber: string, pin: string): Promise<any> {
    const userAuthed = await this.authService.validateUser(phoneNumber, pin);
    if (!userAuthed) {
      //todo throw unauthorized user error
    }
    return userAuthed;
  }
}
