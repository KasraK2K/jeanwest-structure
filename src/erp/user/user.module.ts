import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ErpUserController } from './controller/user.controller';
import { erpUserProviders } from './provider/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpUserProviders],
  controllers: [ErpUserController],
  exports: [...erpUserProviders],
})
export class ERP_UserModule {}
