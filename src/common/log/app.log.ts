import { Logger } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './winston/winston.config';

export const multipleLogger =
  process.env.NODE_ENV === 'production'
    ? WinstonModule.createLogger(winstonOptions)
    : new Logger();

export const logger = WinstonModule.createLogger(winstonOptions);
