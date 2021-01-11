export interface IRepo {
  create(schema: any, data: Record<string, unknown>): any;
  findOne(schema: any, data: Record<string, unknown>): any;
  runQuery(query: string): Promise<Array<Record<string, unknown>>>;
}
