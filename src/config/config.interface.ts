import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
}

export class EnvironmentVariables {
  // Application
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  MAIN_PORT: number;

  // Database: Jeanswest
  @IsString()
  DATABASE_JW_CNAME: string;

  @IsString()
  DATABASE_JW_TYPE: string;

  @IsString()
  DATABASE_JW_HOSTNAME: string;

  @IsNumber()
  DATABASE_JW_PORT: number;

  @IsString()
  DATABASE_JW_USERNAME: string;

  @IsString()
  DATABASE_JW_PASSWORD: string;

  @IsString()
  DATABASE_JW_DBNAME: string;

  // Database: ERP
  @IsString()
  DATABASE_ERP_CNAME: string;

  @IsString()
  DATABASE_ERP_TYPE: string;

  @IsString()
  DATABASE_ERP_HOSTNAME: string;

  @IsNumber()
  DATABASE_ERP_PORT: number;

  @IsString()
  DATABASE_ERP_USERNAME: string;

  @IsString()
  DATABASE_ERP_PASSWORD: string;

  @IsString()
  DATABASE_ERP_DBNAME: string;

  // Typeorm
  @IsBoolean()
  TYPEORM_SYNC: boolean;

  @IsBoolean()
  TYPEORM_RUN_MIGRATIONS: boolean;
}
