import { ENV_PATH } from 'src/common/constant/env.const';
import appConfig from './app.config';
import databaseConfig from './database.config';
import { validate } from './config.validation';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

export const configOptions: ConfigModuleOptions = {
  envFilePath: ENV_PATH,
  isGlobal: true,
  load: [appConfig, databaseConfig],
  validate,
};
