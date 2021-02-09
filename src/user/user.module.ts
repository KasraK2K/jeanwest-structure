import { CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './account/provider/account.provider';
import { addressProviders } from './address/provider/address.provider';
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
