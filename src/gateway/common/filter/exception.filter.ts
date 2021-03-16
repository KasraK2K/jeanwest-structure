import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IError } from 'src/common/interface/error.interface';
import { httpMap } from 'src/common/util/http.map';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: IError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    /* const request = ctx.getRequest(); */
    const httpStatusCode = +exception.name > 399 ? +exception.name : 500; //TODO fix the number converter operation
    const httpStatus = httpMap.get(httpStatusCode.toString());
    const httpStatusMessage = exception.message || httpStatus.message;

    const httpResponse = {
      statusCode: httpStatusCode,
      message: httpStatusMessage,
      data: exception.data,
    };

    response.status(httpResponse.statusCode).json(httpResponse);
  }
}

