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
  typeorm_database_jeanswest: {
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
  typeorm_database_erp: {
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
  pg_database_jeanswest: {
    // max: 20,
    // connectionString: `postgres://${process.env.DATABASE_JW_USERNAME}:${process.env.DATABASE_JW_PASSWORD}@${process.env.DATABASE_JW_HOSTNAME}:${process.env.DATABASE_JW_PORT}/${process.env.DATABASE_JW_DBNAME}`,
    // idleTimeoutMillis: 30000,
    host: process.env.DATABASE_JW_HOSTNAME,
    user: process.env.DATABASE_JW_USERNAME,
    password: process.env.DATABASE_JW_PASSWORD,
    database: process.env.DATABASE_JW_DBNAME,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },
});
