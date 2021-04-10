import { CreateHelloDto } from 'src/hello/dto/hello.dto';
import { Hello } from '../entity/typeorm/hello.entity.jw';

export interface IHelloService {
  createHello(body: CreateHelloDto): Promise<Hello>;
}
