export interface IError {
  name: string;
  message?: string;
  data?: Record<string, unknown>[];
}
