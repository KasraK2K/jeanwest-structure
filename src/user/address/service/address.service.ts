import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ADDRESS_REPO } from 'src/user/common/constant/repository.const';
import { Address } from 'src/user/common/entity/typeorm/address.entity.jw';
import { DeleteResult } from 'typeorm';
import {
  CreateAddressDto,
  CreateAddressResponseDto,
  AddressResponseDto,
  GetByIdDto,
  UpdateAddressDto,
} from '../dto/address.dto';
import { AddressSrevice } from '../interface/address-service.interface';

@Injectable()
export class AddressService implements AddressSrevice {
  constructor(
    @Inject(ADDRESS_REPO)
    private readonly repository,
  ) {}

  async createAddress(
    body: CreateAddressDto,
  ): Promise<CreateAddressResponseDto> {
    try {
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getAddress(body: GetByIdDto): Promise<AddressResponseDto> {
    try {
      const { id }: { id: string | number } = body;
      return this.repository.findById(id);
    } catch (err) {
      throw err;
    }
  }

  async getAddresses(): Promise<AddressResponseDto[]> {
    return this.repository.findMany();
  }

  async updateAddress(body: UpdateAddressDto): Promise<AddressResponseDto> {
    const { id, country, province, city, address, longtitude, latitude } = body;

    if (!id)
      throw new BadRequestException(
        'It is not a valid address. It does not have an id!',
      );

    const foundAddress = await this.repository.findById(id);

    if (!foundAddress) throw new BadRequestException('Address does not exist!');

    if (country) foundAddress.country = country;
    if (province) foundAddress.province = province;
    if (city) foundAddress.city = city;
    if (address) foundAddress.address = address;
    if (longtitude) foundAddress.longtitude = longtitude;
    if (latitude) foundAddress.latitude = latitude;

    const savedAddress = await this.repository.save(foundAddress);

    return savedAddress;
  }

  async deleteAddress(body: GetByIdDto): Promise<DeleteResult> {
    const { id } = body;
    const checkAddress = await this.repository.findById(id);
    if (!checkAddress)
      throw new BadRequestException('No such address was found!');
    const address = this.repository.deleteById(id);
    return address;
  }
}
