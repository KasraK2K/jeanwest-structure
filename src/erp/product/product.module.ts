import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ErpProductController } from './controller/product.controller';
import { erpProductProviders } from './provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpProductProviders],
  controllers: [ErpProductController],
  exports: [...erpProductProviders],
})
export class ErpProductModule {}
