import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JWT_SECRET } from 'src/common/constant/jwt.const';

@Injectable()
export class CustomerJwtStrategy extends PassportStrategy(Strategy, 'customerJwt') {
  constructor(
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(JWT_SECRET),
    });
  }

  async validate(payload: any) {
    return { userId: payload.secret };
  }
}