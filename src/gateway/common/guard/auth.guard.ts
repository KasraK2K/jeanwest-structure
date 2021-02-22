import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}
  canActivate(context: ExecutionContext): any {
    const request = context.switchToHttp().getRequest();
    let token: string = request.headers.authorization
      ? request.headers.authorization
      : null;
    if (token) {
      token = token.split('Bearer ')[1];
      const decoded = verify(
        token,
        this.configService.get<string>('tokenSecret'),
      );
      request.headers.userId = decoded['userId'];
      //todo raise error 401
      return request;
    }
    else{
        //todo raise error 403
    }
  }
}
