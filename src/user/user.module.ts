import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './account/provider/account.provider';
import { addressProviders } from './address/provider/address.provider';
import { personProviders } from './person/provider/person.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...accountProviders, ...addressProviders, ...personProviders],
  exports: [...accountProviders, ...addressProviders, ...personProviders],
})
export class UserModule {}
