import { IHttpReq, IHttpRes } from '../common/interface/http.interface';
import { httpMap } from '../common/util/http.map';

export const responseTransformer = (input: IHttpReq, statusCode: number): IHttpRes => {
  const key = statusCode ? String(statusCode) : '200';
  const response = httpMap.get(key);
  if (Object.keys(input).length != 0) response.data = input;
  return response;
};
