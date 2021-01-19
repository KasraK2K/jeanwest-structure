import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_ProductController } from './controller/product.controller';
import { erpProductProviders } from './provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpProductProviders],
  controllers: [ERP_ProductController],
  exports: [...erpProductProviders],
})
export class ERP_ProductModule {}
