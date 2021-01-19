import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_UserController } from './controller/user.controller';
import { erpUserProviders } from './provider/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpUserProviders],
  controllers: [ERP_UserController],
  exports: [...erpUserProviders],
})
export class ERP_UserModule {}
