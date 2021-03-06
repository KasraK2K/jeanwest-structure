import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWT_EXPIRY, JWT_SECRET } from 'src/common/constant/jwt.const';

export const jwtConfig = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get(JWT_SECRET),
    signOptions: { expiresIn: configService.get(JWT_EXPIRY) },
  }),
  inject: [ConfigService],
};
