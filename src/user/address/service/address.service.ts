import {
  BadRequestException,
  Inject,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { ADDRESS_REPO } from 'src/user/common/constant/repository.const';
import {
  USER_ACCOUNT_SERVICE,
  USER_PERSON_SERVICE,
} from 'src/user/common/constant/service.const';
import { DeleteResult } from 'typeorm';
import {
  CreateAddressDto,
  AddressResponseDto,
  GetByIdDto,
  UpdateAddressDto,
  StaticGiftCardRsponseDto,
} from '../dto/address.dto';
import { AddressSrevice } from '../interface/address-service.interface';
import { cardsInfo } from './statics';

@Injectable()
export class AddressService implements AddressSrevice {
  constructor(
    @Inject(ADDRESS_REPO)
    private readonly repository,

    @Inject(USER_ACCOUNT_SERVICE)
    private readonly accountService,

    @Inject(USER_PERSON_SERVICE)
    private readonly personService,
  ) {}

  async createAddress(body: CreateAddressDto): Promise<AddressResponseDto> {
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');
      const person = await this.personService.getPersonByAccountId({
        id: body.userAccountId,
      });
      if (!person) throw new ForbiddenException('No Person found!');
      body.person = person;
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getMyAddress(body): Promise<AddressResponseDto> {
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');
      const person = await this.personService.getPersonByAccountId({
        id: body.userAccountId,
      });
      return this.repository.findMany({ where: { personId: person.id } });
    } catch (err) {
      throw err;
    }
  }

  //? For development purposes
  async getAddress(body: GetByIdDto): Promise<AddressResponseDto> {
    try {
      const { id }: { id: string | number } = body;
      return this.repository.findById(id);
    } catch (err) {
      throw err;
    }
  }

  //? For development purposes
  async getAddresses(): Promise<AddressResponseDto[]> {
    return this.repository.findMany();
  }

  async updateAddress(body: UpdateAddressDto): Promise<AddressResponseDto> {
    const {
      id,
      title,
      recieverFirstName,
      recieverLastName,
      recieverMobile,
      country,
      province,
      city,
      district,
      address,
      houseNumber,
      unitNumber,
      postalCode,
      longtitude,
      latitude,
      active,
      isUser,
    } = body;

    if (!body.userAccoutnId)
      throw new BadRequestException(
        'It is not a valid address. It does not have an id!',
      );

    const foundAddress = await this.repository.findById(id);

    if (!foundAddress) throw new BadRequestException('Address does not exist!');

    if (title) foundAddress.title = title;
    if (recieverFirstName) foundAddress.recieverFirstName = recieverFirstName;
    if (recieverLastName) foundAddress.recieverLastName = recieverLastName;
    if (recieverMobile) foundAddress.recieverMobile = recieverMobile;
    if (country) foundAddress.country = country;
    if (province) foundAddress.province = province;
    if (city) foundAddress.city = city;
    if (district) foundAddress.district = district;
    if (address) foundAddress.address = address;
    if (houseNumber) foundAddress.houseNumber = houseNumber;
    if (unitNumber) foundAddress.unitNumber = unitNumber;
    if (postalCode) foundAddress.postalCode = postalCode;
    if (longtitude) foundAddress.longtitude = longtitude;
    if (latitude) foundAddress.latitude = latitude;
    if (active) foundAddress.active = active;
    if (isUser) foundAddress.isUser = isUser;

    const savedAddress = await this.repository.save(foundAddress);

    return savedAddress;
  }

  async deleteAddress(body: GetByIdDto): Promise<DeleteResult> {
    const { id } = body;
    const checkAddress = await this.repository.findById(id);
    if (!checkAddress)
      throw new BadRequestException('No such address was found!');
    const address = await this.repository.deleteById(id);
    return address;
  }

  async getCardsInfo(): Promise<StaticGiftCardRsponseDto> {
    return cardsInfo;
  }
}
