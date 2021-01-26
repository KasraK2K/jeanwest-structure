import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ADDRESS_REPO } from 'src/user/common/constant/repository.const';
import { Address } from 'src/user/common/entity/address.entuty.jw';
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
      return this.repository.create(Address, body);
    } catch (err) {
      throw err;
    }
  }

  async getAddress(body: GetByIdDto): Promise<AddressResponseDto> {
    try {
      const { id }: { id: string | number } = body;
      return this.repository.findOne(Address, id);
    } catch (err) {
      throw err;
    }
  }

  async getAddresses(): Promise<AddressResponseDto[]> {
    return this.repository.findMany(Address);
  }

  async updateAddress(body: UpdateAddressDto): Promise<AddressResponseDto> {
    const {
      id = '',
      country,
      province,
      city,
      address,
      longtitude,
      latitude,
      personId,
    } = body;

    const foundAddress = await this.repository.findById(Address, id);

    if (country) foundAddress.country = country;
    if (province) foundAddress.province = province;
    if (city) foundAddress.city = city;
    if (address) foundAddress.address = address;
    if (longtitude) foundAddress.longtitude = longtitude;
    if (latitude) foundAddress.latitude = latitude;
    if (personId) foundAddress.personId = personId;

    const savedAddress = await this.repository.save(Address, foundAddress);

    return savedAddress;
  }

  async deleteAddress(body: GetByIdDto) {
    const { id: addressId } = body;
    const address = this.repository.findById(Address, addressId);
    return address;
  }
}
