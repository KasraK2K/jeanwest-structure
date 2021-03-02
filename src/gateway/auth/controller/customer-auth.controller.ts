import { Controller, Inject, Post, Request } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CUSTOMER_AUTH_SERVICE } from '../common/constant/auth.const';
import { ResCustomerAuthDto } from '../dto/res-customer-auth.dto';

@Controller('customer')
export class CustomerAuthController {
  constructor(
    @Inject(CUSTOMER_AUTH_SERVICE)
    private readonly service,
  ) {}


  @Post('auth')
  async authentication(
    @Request() req,
  ): Promise<ResCustomerAuthDto> {
    const result = await this.service.authentication(req.user);
    result.statusCode = 200;
    result.result = plainToClass(ResCustomerAuthDto, result);
    return result;
  }
}
