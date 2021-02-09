import { DeleteResult } from 'typeorm';

export interface IRepo<T> {
  save?(model: new () => T, data: T): Promise<T>;

  create?(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;

  findMany?(model: new () => T): Promise<Array<T>>;

  findById?(model: new () => T, data: string | number): Promise<T>;

  findOne?(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;
  deleteById?(model: new () => T, data: string | number): Promise<DeleteResult>;

  findAll?(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T[]>;

  runQuery(query: string): Promise<Array<Record<string, unknown>>>;
}
