import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { addressProviders } from './provider/address.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...addressProviders],
  exports: [...addressProviders],
})
export class AddressModule {}
