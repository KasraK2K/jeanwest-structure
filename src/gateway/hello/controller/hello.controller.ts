import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Hello } from 'src/hello/common/entity/typeorm/hello.entity.jw';
import { CreateHelloDto } from 'src/hello/dto/hello.dto';
import { HelloService } from 'src/hello/service/hello.service';
import { DeleteResult } from 'typeorm';
import { HELLO_SERVICE } from '../common/constant/hello.const';

@Controller('hello')
export class HelloController {
  constructor(
    @Inject(HELLO_SERVICE)
    private readonly hello: HelloService,
  ) {}

  @Post('grettings')
  createHello(@Body() body: CreateHelloDto): Promise<Hello> {
    try {
      return this.hello.createHello(body);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  eraseHello(@Param('id', ParseUUIDPipe) id: string): Promise<DeleteResult> {
    try {
      return this.hello.eraseHello(id);
    } catch (error) {
      throw error;
    }
  }
}
