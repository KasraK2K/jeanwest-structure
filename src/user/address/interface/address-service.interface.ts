import { DeleteResult } from 'typeorm';
import {
  AddressResponseDto,
  CreateAddressDto,
  CreateAddressResponseDto,
  GetByIdDto,
  UpdateAddressDto,
} from '../dto/address.dto';

export interface AddressSrevice {
  createAddress(body: CreateAddressDto): Promise<CreateAddressResponseDto>;

  getAddress(body: GetByIdDto): Promise<AddressResponseDto>;

  getAddresses(): Promise<Array<AddressResponseDto>>;

  updateAddress(body: UpdateAddressDto): Promise<AddressResponseDto>;

  deleteAddress(body: GetByIdDto): Promise<DeleteResult>;
}
