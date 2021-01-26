import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { PERSON_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';
import { AddressService } from '../service/address.service';
import {
  AddressResponseDto,
  CreateAddressDto,
  GetByIdDto,
  UpdateAddressDto,
} from '../dto/address.dto';
import { DeleteResult } from 'typeorm';

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
      throw err;
    }
  }

  @Post('/address')
  async getAddress(@Body() body: GetByIdDto): Promise<AddressResponseDto> {
    try {
      return this.addressService.getAddress(body);
    } catch (err) {
      throw err;
    }
  }

  @Get('/addresses')
  async getAddresses(): Promise<AddressResponseDto[]> {
    try {
      return this.addressService.getAddresses();
    } catch (err) {
      throw err;
    }
  }

  @Post('/updateAddress')
  async updateAddress(
    @Body() body: UpdateAddressDto,
  ): Promise<AddressResponseDto> {
    try {
      return this.addressService.updateAddress(body);
    } catch (err) {
      throw err;
    }
  }

  @Delete('/deleteAddress')
  async deleteAddress(@Body() body: GetByIdDto): Promise<DeleteResult> {
    try {
      return this.addressService.deleteAddress(body);
    } catch (err) {
      throw err;
    }
  }
}
