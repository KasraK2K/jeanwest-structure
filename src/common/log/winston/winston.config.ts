import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { utilities } from 'nest-winston';

export const winstonOptions: WinstonModuleOptions = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike(),
      ),
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike(),
      ),
      filename: 'app.log',
    }),
  ],
};
