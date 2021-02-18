import { IFilter } from 'src/gateway/inventory/common/interface/product-filter.interface';


class Sql {
  convertOrderBy(sort: string, ascent: number): string {
    const ascending: string = ascent > 0 ? "DESC" : "ASC";
    return `"${sort}" ${ascending}`;
  }

  convertOperator(key: string, operator: any): string {
    const operators = new Map([
      ['eq', '='],
      ['gt', '>'],
      ['lt', '<'],
      ['gte', '>='],
      ['lte', '<='],
      ['in', 'in'],
      ['not', '<>'],
    ]);
    const conditionKey: string[] = key.split('->>');
    key = conditionKey.length > 1 ? `"${conditionKey[0]}"->>'${conditionKey[1]}'` : `"${conditionKey[0]}"`;
    const op = Object.keys(operator);
    const conditionValue = Object.entries(operator)[0][1];
    const currentOperator = operators.get(op[0]);
    const value = Number(String(conditionValue)) ? Number(String(conditionValue)) : `'${conditionValue}'`;
    return `${key} ${currentOperator} ${value}`;
  }

  convertWhere(condition: IFilter): string {
    let where = '';
    for (const [key, value] of Object.entries(condition)) {
      where +=
        where != ''
          ? ' and ' + this.convertOperator(key, value)
          : this.convertOperator(key, value);
    }
    return where;
  }

  public select(
    select: string[],
    table: string,
    where?: IFilter,
    orderBy?: string,
    ascent?: number,
    limit?: number,
    offset?: number,
  ): string {
    const whereText = where ? ` WHERE ${this.convertWhere(where)} ` : '';
    const orderByText = orderBy && ascent ? ` ORDER BY ${this.convertOrderBy(orderBy, ascent)} ` : '';
    const limitText = limit ? ` LIMIT ${limit} ` : '';
    const offsetText = offset && limit ? ` OFFSET ${limit * offset} ` : '';
    const query = `
      SELECT
      ${select}
      FROM
      ${table}
      ${whereText}
      ${orderByText}
      ${limitText}
      ${offsetText}
      `;
    return query;
  }

  public selectJsonb(
    select: string[],
    table: string,
    where: IFilter,
    orderBy: any,
    limit: number,
    offset: number,
  ): string {
    const query = `
      SELECT
      ${select}
      FROM
      ${table}
      WHERE
      ${where}
      ORDER BY
      ${orderBy}
      LIMIT
      ${limit}
      OFFSET
      ${limit * offset}
      `;
    return query;
  }
}
const sql = new Sql();
export default sql;
