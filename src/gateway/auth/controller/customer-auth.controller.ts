import { Controller, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { CustomerLocalAuthGuard } from 'src/gateway/common/guard/customer-local-auth.guard';
import { CUSTOMER_AUTH_SERVICE } from '../common/constant/auth.const';
import { ResCustomerAuthDto } from '../dto/res-customer-auth.dto';

@UseGuards(CustomerLocalAuthGuard)
@Controller('customer')
export class CustomerAuthController {
  constructor(
    @Inject(CUSTOMER_AUTH_SERVICE)
    private readonly service,
  ) {}
  // @UseGuards(AuthGuard('localCustomer'))
  // @UseGuards(AuthGuard('customerLocal'))
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
