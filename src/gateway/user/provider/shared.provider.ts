import { userAuthProviders } from 'src/gateway/user/provider/user-auth.provider';
import { addressProviders } from './address.provider';

export const userProviders = [...addressProviders, ...userAuthProviders];
