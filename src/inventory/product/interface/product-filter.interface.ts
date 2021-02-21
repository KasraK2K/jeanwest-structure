export enum operators {
  equal = 'eq',
  greaterThan = 'gt',
  lessThan = 'lt',
  greaterThanEqual = 'gte',
  lessThanEqual = 'lte',
  contain = 'ct'
}

export interface IFilter {
  [key: string]: TOperator;
}

export type TOperator = {
  [key in operators]:
    | string
    | number
    | string[]
    | number[]
    | boolean
    | boolean[];
  };
