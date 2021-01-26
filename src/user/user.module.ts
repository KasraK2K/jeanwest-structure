import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AddressModule } from './address/address.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [DatabaseModule, AddressModule, PersonModule],
  exports: [AddressModule, PersonModule],
})
export class UserModule {}
