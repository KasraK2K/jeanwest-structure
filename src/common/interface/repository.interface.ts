export interface IRepo<T> {
  create(model: new () => T, data: Record<string, unknown>): Promise<T>;
  findOne(model: new () => T, data: Record<string, unknown>): Promise<T>;
}
