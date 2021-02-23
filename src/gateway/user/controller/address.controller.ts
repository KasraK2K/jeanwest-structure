import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  UseGuards,
} from '@nestjs/common';
import { USER_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';
import { AddressService } from 'src/user/user/address/service/address.service';
import {
  CreateAddressDto,
  GetByIdDto,
  AddressResponseDto,
  UpdateAddressDto,
  StaticGiftCardRsponseDto,
} from 'src/user/user/address/dto/address.dto';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';

@Controller('address')
export class AddressController {
  constructor(
    @Inject(USER_ADDRESS_SERVICE)
    private readonly addressService: AddressService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('createAddress')
  async createAddress(
    @Body() body: CreateAddressDto,
  ): Promise<AddressResponseDto> {
    try {
      return this.addressService.createAddress(body);
    } catch (err) {
      throw err;
    }
  }

  @UseGuards(AuthGuard)
  @Get('myAddresses')
  async getMyAddress(
    @Body() body: Record<string, never>,
  ): Promise<AddressResponseDto> {
    try {
      return this.addressService.getMyAddress(body);
    } catch (err) {
      throw err;
    }
  }
  //? For development purposes only
  @Post('address')
  async getAddress(@Body() body: GetByIdDto): Promise<AddressResponseDto> {
    try {
      return this.addressService.getAddress(body);
    } catch (err) {
      throw err;
    }
  }

  //? For development purposes only
  @Get('addresses')
  async getAddresses(): Promise<AddressResponseDto[]> {
    try {
      return this.addressService.getAddresses();
    } catch (err) {
      throw err;
    }
  }

  @Post('updateAddress')
  async updateAddress(
    @Body() body: UpdateAddressDto,
  ): Promise<AddressResponseDto> {
    try {
      return this.addressService.updateAddress(body);
    } catch (err) {
      throw err;
    }
  }

  @Delete('deleteAddress')
  async deleteAddress(@Body() body: GetByIdDto): Promise<DeleteResult> {
    try {
      return this.addressService.deleteAddress(body);
    } catch (err) {
      throw err;
    }
  }

  @Get('giftCardsInfo')
  async getCardsInfo(): Promise<StaticGiftCardRsponseDto> {
    try {
      return this.addressService.getCardsInfo();
    } catch (err) {
      throw err;
    }
  }
}
