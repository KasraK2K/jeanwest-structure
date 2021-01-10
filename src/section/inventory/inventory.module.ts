import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductController } from './module/product/controller/product.controller';
import { productProviders } from './module/product/provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders],
  controllers: [ProductController],
  exports: [...productProviders],
})
export class InventoryModule {}
