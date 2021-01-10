import { ConfigService } from '@nestjs/config';
import {
  ERP_DB,
  ERP_TYPEORM_CNN,
  JW_DB,
  JW_TYPEORM_CNN,
} from 'src/common/constant/database.const';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: JW_TYPEORM_CNN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>
      await createConnection(configService.get(JW_DB)),
  },
  {
    provide: ERP_TYPEORM_CNN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>
      await createConnection(configService.get(ERP_DB)),
  },
];
