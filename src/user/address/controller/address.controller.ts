import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { PERSON_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';

import { AddressService } from '../service/address.service';

import { CreateAddressDto } from '../dto/address.dto';
import { Person } from 'src/user/common/entity/person.entity.jw';

@Controller('api/v1/address')
export class AddressController {
  constructor(
    @Inject(PERSON_ADDRESS_SERVICE)
    private readonly addressService: AddressService,
  ) {}

  @Post('/createAddress')
  async createAddress(
    @Body() body: CreateAddressDto,
  ): Promise<CreateAddressDto> {
    try {
      return this.addressService.createAddress(body);
    } catch (err) {
      return err;
    }
  }
}
