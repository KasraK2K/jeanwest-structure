import {
  ERP_TYPEORM_CNN,
  ERP_TYPEORM_REPO,
  JW_TYPEORM_CNN,
  JW_TYPEORM_REPO,
} from 'src/common/constant/database.const';
import { Connection } from 'typeorm';
import { TypeormRepository } from './repository/typeorm.repository';

export const repositoryProviders = [
  {
    provide: JW_TYPEORM_REPO,
    useFactory: (connection: Connection) => {
      return connection.getCustomRepository(TypeormRepository);
    },
    inject: [JW_TYPEORM_CNN],
  },
  {
    provide: ERP_TYPEORM_REPO,
    useFactory: (connection: Connection) => {
      return connection.getCustomRepository(TypeormRepository);
    },
    inject: [ERP_TYPEORM_CNN],
  },
];
