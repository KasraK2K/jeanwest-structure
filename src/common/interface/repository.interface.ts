export interface IRepo<T> {
  create(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;
  findOne(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;
  runQuery?(query: string): Promise<Array<Record<string, unknown>>>;
}
