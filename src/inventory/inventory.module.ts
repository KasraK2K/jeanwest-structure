import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './product/provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders],
  exports: [...productProviders],
})
export class InventoryModule {}
