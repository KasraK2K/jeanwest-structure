import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AccountModule } from './account/account.module';
import { AddressModule } from './address/address.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [DatabaseModule, AddressModule, PersonModule, AccountModule],
  exports: [AddressModule, PersonModule, AccountModule],
})
export class UserModule {}
