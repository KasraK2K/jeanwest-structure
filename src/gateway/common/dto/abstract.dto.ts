import { Expose } from "class-transformer";

export abstract class AbstractDto {
  @Expose()
  response?: string;
}
