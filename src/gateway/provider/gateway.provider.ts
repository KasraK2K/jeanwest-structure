import { APP_INTERCEPTOR } from "@nestjs/core";
import { TransformInterceptor } from "../interceptor/transform.interceptor";

export const gatewayProviders = [
    {
        provide: APP_INTERCEPTOR,
        useClass: TransformInterceptor,
      },
];