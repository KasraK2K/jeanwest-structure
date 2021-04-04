import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WinstonLogger } from 'nest-winston';
import { IErrorThrown } from 'src/common/interface/error.interface';
import { logger } from 'src/common/log/app.log';
import { httpMap } from 'src/common/util/http.map';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: IErrorThrown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const httpResponse = {
      statusCode: exception.statusCode || 500,
      message: exception.message,
      data: exception.data,
    };

    logger.error(`😠😠😠: ${exception.message}`);
    if (exception.data) logger.error(exception.data);
    response.status(httpResponse.statusCode).json(httpResponse);
  }
}
