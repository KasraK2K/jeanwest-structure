import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from 'src/config/jwt.config';
import { CustomerModule } from 'src/user/user.module';
import { customerAuthProviders } from './customer/provider/customer.provider';
import { sharedProviders } from './shared/provider.shared';

@Module({
  imports: [
    CustomerModule,
    CacheModule.register({}),
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  providers: [...customerAuthProviders],
  exports: [...sharedProviders, JwtModule, CacheModule],
})
export class AuthModule {}
