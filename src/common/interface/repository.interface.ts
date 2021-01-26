export interface IRepo<T> {
<<<<<<< HEAD
  save(data: T): Promise<T>;

  create(model: new () => T, data: Record<string, unknown>): Promise<T>;

  findMany(
    model: new () => T,
    data: Record<string, unknown>,
  ): Promise<Array<T>>;

  findById(model: new () => T, data: string | number): Promise<T>;

  findOne(model: new () => T, data: Record<string, unknown>): Promise<T>;

  deleteById(model: new () => T, data: string | number);

=======
  create(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;
  findOne(
    model: new () => T,
    data: Record<string, unknown> | string,
  ): Promise<T>;
>>>>>>> bdcc116cb074feb3ccabbac4311f1e251acbb308
  runQuery(query: string): Promise<Array<Record<string, unknown>>>;
}
