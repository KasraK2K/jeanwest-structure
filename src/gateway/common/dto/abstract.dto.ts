import { Exclude } from "class-transformer";

export abstract class AbstractDto {
    @Exclude()
    statusCode: number;
 }