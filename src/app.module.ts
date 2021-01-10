import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config/config.option';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './common/log/winston/winston.config';
import { ValidationPipe } from './common/pipe/validation.pipe';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    WinstonModule.forRoot(winstonOptions),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
