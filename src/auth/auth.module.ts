import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { customerAuthProviders } from './customer/provider/customer.provider';
import { sharedProviders } from './shared/provider.shared';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // secret: configService.get('jwtSecret'),
        // signOptions: { expiresIn: configService.get('jwtExpiresIn') },
        secret: '123455',
        signOptions: { expiresIn: '60s' },
      }),
    }),
  ],
  providers: [...customerAuthProviders],
  exports: [...sharedProviders, JwtModule],
})
export class AuthModule {}
