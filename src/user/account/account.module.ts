import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AccountController } from './controller/account.controller';
import { accountProviders } from './provider/account.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [...accountProviders],
  exports: [...accountProviders],
})
export class AccountModule {}
