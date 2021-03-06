import { Expose } from "class-transformer";

export abstract class HttpResDto {
  @Expose()
  resKey?: string;
}
