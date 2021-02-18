import { IPaginate } from "src/common/interface/pagination.interface";

export class Pagination<T> {
  public result: T[];
  public page: number;
  public total: number;
  public perPage: number;

  constructor(data: IPaginate<T>) {
    this.result = data.result;
    this.page = data.page + 1;
    this.perPage = data.result.length;
    this.total = data.total;
  }
}
