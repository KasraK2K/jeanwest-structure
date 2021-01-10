import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config/config.option';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './common/log/winston/winston.config';
import { ValidationPipe } from './common/pipe/validation.pipe';
import { ExceptionFilter } from './common/exception/rpc-exception.filter';
import { InventoryModule } from './section/inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    WinstonModule.forRoot(winstonOptions),
    InventoryModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class AppModule {}
