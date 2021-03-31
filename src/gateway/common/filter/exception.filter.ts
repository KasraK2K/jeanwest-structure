import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IErrorThrown } from 'src/common/interface/error.interface';
import { httpMap } from 'src/common/util/http.map';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: IErrorThrown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    /* const request = ctx.getRequest(); */
    console.log(exception.statusCode);
    if (exception.statusCode) {
      const httpResponse = {
        statusCode: exception.statusCode,
        message: exception.message,
        data: exception.data,
      };

      response.status(httpResponse.statusCode).json(httpResponse);
    }
  }
}
