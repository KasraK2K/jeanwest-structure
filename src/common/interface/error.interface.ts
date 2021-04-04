export interface IErrorArgs {
  name: string;
  message?: string;
  data?: any;
}

export interface IErrorThrown {
  statusCode: number;
  message: string;
  data?: any;
}
