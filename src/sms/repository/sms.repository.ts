import { Inject, Injectable } from "@nestjs/common";
import { JW_TYPEORM_REPO } from "src/common/constant/database.const";
import { IRepo } from "src/common/interface/repository.interface";
import { SmsPattern } from "../common/entity/typeorm/sms.entity.jw";

@Injectable()
export class SmsRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<SmsPattern>,
  ) {}
  findOne(data: Record<string, unknown>) {
    return this.baseRepository.findOne(SmsPattern, data);
  }
}
