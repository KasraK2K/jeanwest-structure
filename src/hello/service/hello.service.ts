import { HttpService, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IHelloService } from '../common/interface/hello.interface';
import { CreateHelloDto } from '../dto/hello.dto';
import { Hello } from '../common/entity/typeorm/hello.entity.jw';
import { HELLO_REPO } from '../common/constant/repository.const';

@Injectable()
export class HelloService implements IHelloService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    @Inject(HELLO_REPO)
    private readonly repository,
  ) {}

  async createHello(body: CreateHelloDto): Promise<Hello> {
    try {
      return await this.repository.createHello(body);
    } catch (error) {
      throw error;
    }
  }
}
