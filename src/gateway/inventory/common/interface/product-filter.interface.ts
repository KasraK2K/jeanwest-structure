enum operators {
  equal = 'eq',
  greaterThan = 'gt',
  lessThan = 'lt',
  greaterThanEqual = 'gte',
  lessThanEqual = 'lte',
  contain = 'ct'
}

export interface IFilter {
  [key: string]: {
    [key in operators]:
      | string
      | number
      | string[]
      | number[]
      | boolean
      | boolean[];
  };
}
