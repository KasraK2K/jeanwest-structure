export interface IRepo<T> {
  save(data: T): Promise<T>;

  create(model: new () => T, data: Record<string, unknown>): Promise<T>;

  findMany(
    model: new () => T,
    data: Record<string, unknown>,
  ): Promise<Array<T>>;

  findById(model: new () => T, data: string | number): Promise<T>;

  findOne(model: new () => T, data: Record<string, unknown>): Promise<T>;

  deleteById(model: new () => T, data: string | number);

  runQuery(query: string): Promise<Array<Record<string, unknown>>>;
}
