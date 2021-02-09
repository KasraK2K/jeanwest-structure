import { accountProviders } from 'src/gateway/user/provider/account.provider';
import { addressProviders } from './address.provider';

export const userProviders = [...addressProviders, ...accountProviders];
