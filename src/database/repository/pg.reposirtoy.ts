import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { plainToClass } from 'class-transformer';
import { Pool } from 'pg';
import { DeleteResult } from 'typeorm';

@Injectable()
export class PgRepository<T> implements IRepo<T> {
  constructor(private pool: Pool) {}

  async create(model: new () => T, data: string): Promise<T> {
    const result = {};
    return plainToClass(model, result);
  }

  async findOne(model: new () => T, data: string): Promise<T> {
    const preResult = await this.pool.query(data);
    return plainToClass(model, preResult.rows[0]);
  }

  async save(model: new () => T, data: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async findMany(model: new () => T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  async findById(model: new () => T, data: string | number): Promise<T> {
    throw new Error('Method not implemented.');
  }
  async deleteById(
    model: new () => T,
    data: string | number,
  ): Promise<DeleteResult> {
    throw new Error('Method not implemented.');
  }
  async runQuery(query: string): Promise<Record<string, unknown>[]> {
    throw new Error('Method not implemented.');
  }
}
