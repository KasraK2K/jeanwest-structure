import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DogController } from './module/dog/controller/dog.controller';
import { dogProviders } from './module/dog/provider/dog.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...dogProviders],
  controllers: [DogController],
  exports: [...dogProviders],
})
export class InventoryModule {}
