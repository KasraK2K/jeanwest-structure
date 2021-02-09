import { CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AccountModule } from './account/account.module';
import { accountProviders } from './account/provider/account.provider';
import { AddressModule } from './address/address.module';
import { addressProviders } from './address/provider/address.provider';
import { PersonModule } from './person/person.module';
import { personProviders } from './person/provider/person.provider';

@Module({
  imports: [DatabaseModule, CacheModule.register()],
  providers: [...accountProviders, ...addressProviders, ...personProviders],
  exports: [
    ...accountProviders,
    ...addressProviders,
    ...personProviders,
    CacheModule.register(),
  ],
})
export class UserModule {}
