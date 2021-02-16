export interface ICategory {
  group: string[];
  subGroup: ISubGroup;
  size: ISize;
  gender: string[];
  ageGroup: string[];
  colorFamily: string[];
}

export interface ISubGroup {
  [key: string]: string[];
}

export interface ISize {
  [key: string]: string[];
}
