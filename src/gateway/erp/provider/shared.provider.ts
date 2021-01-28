import { erpBranchProviders } from './branch.provider';
import { erpProductProviders } from './product.provider';
import { erpUserProviders } from './user.provider';

export const erpProviders = [
  ...erpUserProviders,
  ...erpProductProviders,
  ...erpBranchProviders,
];
