import { addressProviders } from './address.provider';
import { customerProviders } from './customer.provider';

export const userProviders = [...addressProviders, ...customerProviders];
