import { ConfigService } from '@nestjs/config';
import {
  ERP_TYPEORM_DB,
  ERP_TYPEORM_CNN,
  JW_TYPEORM_DB,
  JW_PG_CNN,
  JW_TYPEORM_CNN,
  JW_PG_DB,
} from 'src/common/constant/database.const';
import { createConnection } from 'typeorm';


export const databaseProviders = [
  {
    provide: JW_TYPEORM_CNN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>
      await createConnection(configService.get(JW_TYPEORM_DB)),
  },
  {
    provide: ERP_TYPEORM_CNN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>
      await createConnection(configService.get(ERP_TYPEORM_DB)),
  },
  {
    provide: JW_PG_CNN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return configService.get(JW_PG_DB);
    },
  },
];
