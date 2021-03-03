import { ConfigModule, ConfigService } from "@nestjs/config";

export const jwtConfig = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get('jwtSecret'),
    signOptions: { expiresIn: configService.get('jwtExpiresIn') },
  }),
  inject: [ConfigService],
};
