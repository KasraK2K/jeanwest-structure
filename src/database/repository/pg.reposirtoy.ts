import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { plainToClass } from 'class-transformer';
import { Pool } from 'pg';

@Injectable()
export class PgRepository<T> implements IRepo<T> {
  constructor(private pool: Pool) {}

  async findOne(model: new () => T, data: string): Promise<T> {
    const preResult = await this.pool.query(data);
    return plainToClass(model, preResult.rows[0]);
  }
}
