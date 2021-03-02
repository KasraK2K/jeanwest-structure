import { CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './address/provider/address.provider';
import { userProviders } from './customer/provider/customer.provider';

@Module({
  imports: [DatabaseModule, CacheModule.register()],
  providers: [...addressProviders, ...userProviders],
  exports: [...addressProviders, ...userProviders, CacheModule.register()],
})
export class CustomerModule {}
