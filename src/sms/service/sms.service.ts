import { HttpService, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SMS_TYPEORM_REPO } from '../common/const/sms.const';
import { SmsPattern } from '../common/entity/typeorm/sms.entity.jw';
import { ISmsSrevice } from '../interface/sms-service.interface';

@Injectable()
export class SmsService implements ISmsSrevice {
  private apiKey: string;
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    @Inject(SMS_TYPEORM_REPO)
    private readonly repository,
  ) {
    this.apiKey = this.configService.get<string>('smsApiKey');
  }

  public async simpleSend(
    phoneNumber: string[],
    context: string,
  ): Promise<any> {
    const url = `https://api.kavenegar.com/v1/${this.apiKey}/sms/send.json?receptor=${phoneNumber}&message=${context}`;
    await this.httpService.get(url).toPromise();
  }

  public async patternSend(
    phoneNumber: string[],
    pattern: number,
    token: string[],
  ): Promise<any> {
    const tokens: string[] = [];
    for (const key of Array(10).keys()) tokens[key] = `%token${key + 1}`;
    const sms: SmsPattern = await this.repository.findOne({ name: pattern });
    let context: string = sms.context;
    for (const [key, value] of token.entries())
      context = context.replace(tokens[key], value);
    let url = `https://api.kavenegar.com/v1/${this.apiKey}/sms/send.json?receptor=${phoneNumber}&message=${context}`;
    url = encodeURI(url);
    await this.httpService.get(url).toPromise();
  }
}
