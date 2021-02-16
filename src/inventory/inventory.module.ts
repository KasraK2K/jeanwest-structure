import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from './category/provider/category.provider';
import { productProviders } from './product/provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ...categoryProviders],
  exports: [...productProviders, ...categoryProviders],
})
export class InventoryModule {}
