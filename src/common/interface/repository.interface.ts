import { DeleteResult } from 'typeorm';
import { IPaginationOption } from './pagination-option.interface';
import { IPaginate } from './pagination.interface';

export interface IRepo<T> {
  save?(model: new () => T, data: T): Promise<T>;

  create?(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;

  findMany?(
    model: new () => T,
    data?: Record<string, unknown>,
  ): Promise<Array<T>>;

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

  runQuery?(query: string): Promise<Array<Record<string, unknown>>>;

  paginate?(
    model: new () => T,
    data: Record<string, unknown>,
    options: IPaginationOption,
  ): Promise<IPaginate<T>>;
}
