export interface IPaginate<T> {
  result: T[];
  page: number;
  perPage: number;
  total: number;
}
