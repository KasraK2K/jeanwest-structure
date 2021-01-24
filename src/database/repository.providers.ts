import {
  ERP_TYPEORM_CNN,
  ERP_TYPEORM_REPO,
  JW_PG_CNN,
  JW_PG_REPO,
  JW_TYPEORM_CNN,
  JW_TYPEORM_REPO,
} from 'src/common/constant/database.const';
import { IPgConnection } from 'src/common/interface/pgConnection.interface';
import { Connection } from 'typeorm';
import { PgRepository } from './repository/pg.reposirtoy';
import { TypeormRepository } from './repository/typeorm.repository';
import { Pool } from 'pg';

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
  {
    provide: JW_PG_REPO,
    useFactory: (connection: IPgConnection) => {
      return new PgRepository(new Pool(connection));
    },
    inject: [JW_PG_CNN],
  },
];
