import { DeleteResult } from 'typeorm';
import {
  AddressResponseDto,
  CreateAddressDto,
  GetByIdDto,
  UpdateAddressDto,
} from '../dto/address.dto';

export interface AddressSrevice {
  createAddress(body: CreateAddressDto): Promise<AddressResponseDto>;

  getAddress(body: GetByIdDto): Promise<AddressResponseDto>;

  getAddresses(): Promise<Array<AddressResponseDto>>;

  updateAddress(body: UpdateAddressDto): Promise<AddressResponseDto>;

  deleteAddress(body: GetByIdDto): Promise<DeleteResult>;
}
