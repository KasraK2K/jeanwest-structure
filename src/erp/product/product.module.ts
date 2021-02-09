import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { erpProductProviders } from './provider/product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpProductProviders],
  exports: [...erpProductProviders],
})
export class ErpProductModule {}
