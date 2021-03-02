import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomerAuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(phoneNumber: string, pin: string): Promise<any> {
    if(phoneNumber=='09377615057' && pin=="12345") return phoneNumber;
    // const user = await this.usersService.findOne(username);
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