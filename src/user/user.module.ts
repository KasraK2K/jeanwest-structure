import { CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './address/provider/address.provider';
import { customerProviders } from './customer/provider/customer.provider';

@Module({
  imports: [DatabaseModule, CacheModule.register()],
  providers: [...addressProviders, ...customerProviders],
  exports: [...addressProviders, ...customerProviders, CacheModule.register()],
})
export class CustomerModule {}
