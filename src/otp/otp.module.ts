import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SmsModule } from 'src/sms/sms.module';
import { CustomerModule } from 'src/user/user.module';
import { otpProviders } from './provider/otp.provider';

@Module({
  imports: [ConfigModule, CacheModule.register(), SmsModule, CustomerModule],
  providers: [...otpProviders],
  exports: [...otpProviders, ConfigModule, CacheModule.register()],
})
export class OtpModule {}
