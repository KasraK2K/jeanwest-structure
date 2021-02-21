import { IFilter } from 'src/gateway/inventory/common/interface/product-filter.interface';

class Sql {
  async convertOrderBy(sort: string, ascent: number): Promise<string> {
    const ascending: string = ascent > 0 ? 'DESC' : 'ASC';
    return `"${sort}" ${ascending}`;
  }

  async convertOperator(key: string, operator: any): Promise<string> {
    const operators = new Map([
      ['eq', '='],
      ['gt', '>'],
      ['lt', '<'],
      ['gte', '>='],
      ['lte', '<='],
      ['in', 'in'],
      ['not', '<>'],
      ['ct', '@>'],
    ]);
    const jsonbOP = key == 'banimodeDetails->>size' ? '->' : '->>';
    const conditionKey: string[] = key.split('->>');
    key =
      conditionKey.length > 1
        ? `"${conditionKey[0]}"${jsonbOP}'${conditionKey[1]}'`
        : `"${conditionKey[0]}"`;
    const op = Object.keys(operator);
    const conditionValue = Object.entries(operator)[0][1];
    const currentOperator = operators.get(op[0]);
    const value = Number(String(conditionValue))
      ? Number(String(conditionValue))
      : `'${conditionValue}'`;
    return `${key} ${currentOperator} ${value}`;
  }

  async convertToJsonbArray(jsonbValue: string): Promise<string>{
    return `[{"name":"${jsonbValue}"}]`;
  };

  async convertWhere(condition: IFilter): Promise<string> {
    let where = '';
    for (const [key, values] of Object.entries(condition)) {
      for (const [subKey, value] of Object.entries(values)) {
        if (Array.isArray(value)) {
          let or = '';
          for (const cv of value) {
            const newCv = key == "banimodeDetails->>size" ? await this.convertToJsonbArray(String(cv)) : cv;
            const conditionValue: { [x: string]: unknown } = {
              [subKey]: newCv,
            };
            or +=
              or != ''
                ? ' OR ' + (await this.convertOperator(key, conditionValue))
                : ' AND ( ' + (await this.convertOperator(key, conditionValue));
            if (value[value.length - 1] == cv) or += ' ) ';
          }
          where = where + or;
        } else {
          const newValue = key == "banimodeDetails->>size" ? await this.convertToJsonbArray(String(value)) : value;

          const conditionValue: { [x: string]: unknown } = {
            [subKey]: newValue,
          };
          where = await this.manageWhere(where, key, conditionValue);
        }
      }
    }
    return where;
  }

  async manageWhere(
    where: string,
    key: string,
    value: any,
    conditionType = 'AND',
  ): Promise<string> {
    let newWhere = '';
    const condition: string = await this.convertOperator(key, value);
    newWhere +=
      where != '' ? where + ' ' + conditionType + ' ' + condition : condition;
    return newWhere;
  }

  public async select(
    select: string[],
    table: string,
    where?: IFilter,
    orderBy?: string,
    ascent?: number,
    limit?: number,
    offset?: number,
  ): Promise<string> {
    const whereText = where ? ` WHERE ${await this.convertWhere(where)} ` : '';
    const orderByText =
      orderBy && ascent
        ? ` ORDER BY ${await this.convertOrderBy(orderBy, ascent)} `
        : '';
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
}
const sql = new Sql();
export default sql;
