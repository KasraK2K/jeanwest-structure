import { HttpModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { smsProviders } from './provider/sms.provider';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [...smsProviders],
  exports: [...smsProviders, HttpModule],
})
export class SmsModule {}
