import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from '../common/filter/exception.filter';
import { TransformInterceptor } from '../interceptor/transform.interceptor';

export const gatewayProviders = [
  {
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },
];
