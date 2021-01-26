import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AddressController } from './controller/address.controller';
import { addressProviders } from './provider/address.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...addressProviders],
  controllers: [AddressController],
  exports: [...addressProviders],
})
export class AddressModule {}
