import { join } from 'path';

const TypeormConfig: Record<string, unknown> = {
  jwEntities: [
    join(
      __dirname,
      '..',
      '**',
      'common',
      'entity',
      'typeorm',
      '*.entity.jw.{ts,js}',
    ),
  ],
  erpEntities: [
    join(
      __dirname,
      '..',
      '**',
      'common',
      'entity',
      'typeorm',
      '*.entity.erp.{ts,js}',
    ),
  ],
  migrations: [join(__dirname, '..', 'database', 'migration', '*.{ts,js}')],
  cli: {
    migrationsDir: 'src/database/typeorm/migration/',
  },
};
export default () => ({
  database_jeanswest: {
    name: process.env.DATABASE_JW_CNAME,
    type: process.env.DATABASE_JW_TYPE,
    host: process.env.DATABASE_JW_HOSTNAME,
    port: Number(process.env.DATABASE_JW_PORT),
    username: process.env.DATABASE_JW_USERNAME,
    password: process.env.DATABASE_JW_PASSWORD,
    database: process.env.DATABASE_JW_DBNAME,
    synchronize: process.env.TYPEORM_SYNC === 'true',
    migrationsRun: process.env.TYPEORM_RUN_MIGRATIONS === 'true',
    entities: TypeormConfig.jwEntities,
    migrations: TypeormConfig.migrations,
    cli: TypeormConfig.cli,
  },
  database_erp: {
    name: process.env.DATABASE_ERP_CNAME,
    type: process.env.DATABASE_ERP_TYPE,
    host: process.env.DATABASE_ERP_HOSTNAME,
    port: Number(process.env.DATABASE_ERP_PORT),
    username: process.env.DATABASE_ERP_USERNAME,
    password: process.env.DATABASE_ERP_PASSWORD,
    database: process.env.DATABASE_ERP_DBNAME,
    synchronize: process.env.TYPEORM_SYNC === 'true',
    migrationsRun: process.env.TYPEORM_RUN_MIGRATIONS === 'true',
    entities: TypeormConfig.erpEntities,
    migrations: TypeormConfig.migrations,
    cli: TypeormConfig.cli,
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  },
});
