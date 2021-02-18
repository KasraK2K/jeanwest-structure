import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { plainToClass } from 'class-transformer';
import { Pool } from 'pg';
import { IPaginationOption } from 'src/common/interface/pagination-option.interface';
import { IPaginate } from 'src/common/interface/pagination.interface';
import sql from '../sql/query.sql';
import { IFilter } from 'src/gateway/inventory/common/interface/product-filter.interface';
import { Pagination } from '../pagination/typeorm.pagination';
import { jsonbFilter } from 'src/inventory/common/util/jsonbFilter.util';

@Injectable()
export class PgRepository<T> implements IRepo<T> {
  constructor(private pool: Pool) {}

  async findOne(model: new () => T, data: string): Promise<T> {
    const preResult = await this.pool.query(data);
    return plainToClass(model, preResult.rows[0]);
  }

  async paginate(
    model: new () => T,
    data: IFilter,
    option: IPaginationOption,
  ): Promise<IPaginate<T>> {
    data  = await jsonbFilter(data);
    console.log(data);
    option.page = option.page ? option.page['eq'] > 0 ? option.page['eq'] - 1 : 0 : 0;
    option.limit = option.limit ? option.limit['eq'] > 0 ? option.limit['eq'] * 1 : 5 : 5;
    option.sort = option.sort ? option.sort['eq'] ? option.sort['eq'] : "created_at" : "created_at";
    option.ascent = option.ascent ? option.ascent['eq'] ? option.ascent['eq'] * 1 : 1 : 1;
    console.log(option);
    const query = sql.select(
      ['*'],
      model.name.toLowerCase(),
      data,
      option.sort,
      option.ascent,
      option.limit,
      option.page,
    );
    console.log(query);
    const totalQuery = sql.select(
      ['count(*)'],
      model.name.toLowerCase(),
      data,
    );
    const queryResult = await this.pool.query(query);
    const items: T[] = queryResult.rows;
    const total = await this.pool.query(totalQuery);
    const paginateResult = plainToClass(model, items);
    const result = new Pagination<T>({
      result: paginateResult,
      perPage: option.limit,
      page: option.page,
      total:total.rows[0].count * 1,
    });
    return result;
  }
}
