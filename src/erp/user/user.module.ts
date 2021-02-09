import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { erpUserProviders } from './provider/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpUserProviders],
  exports: [...erpUserProviders],
})
export class ERP_UserModule {}
