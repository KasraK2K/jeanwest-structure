import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHttpRes } from '../common/interface/http.interface';
import { responseTransformer } from './response.transformer';


@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, IHttpRes> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IHttpRes> {
    const res = context.switchToHttp().getResponse<Response>();
    return next.handle().pipe(map((data) => responseTransformer(data, res['statusCode'])));
  }
}
