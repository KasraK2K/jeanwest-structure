export interface IPgConnection {
  host: string;
  user: string;
  password: string;
  database: string;
  max?: number;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
}
