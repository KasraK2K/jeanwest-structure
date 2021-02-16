import { categoryProviders } from './category.provider';
import { productProviders } from './product.provider';

export const inventoryProviders = [...productProviders, ...categoryProviders];
