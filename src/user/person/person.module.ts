import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PersonController } from './controller/person.controller';
import { personProviders } from './provider/person.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...personProviders],
  controllers: [PersonController],
  exports: [...personProviders],
})
export class PersonModule {}
