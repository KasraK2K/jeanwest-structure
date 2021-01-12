import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { erpProductTransformer } from './erp-product.transformer';

@Injectable()
export class ErpProductInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const finalData = erpProductTransformer(context.getArgs()[0]);
    context.getArgs()[0] = finalData;
    return next.handle().pipe(map((value) => value));
  }
}
