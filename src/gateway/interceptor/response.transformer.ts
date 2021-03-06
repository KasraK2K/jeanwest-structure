import { IHttpReq, IHttpRes } from '../common/interface/http.interface';
import { httpMap } from '../common/util/http.map';

export const responseTransformer = (input: IHttpReq): IHttpRes => {
  const key = input.response ? String(input.response) : '200';
  const response = httpMap.get(key);
  delete input.response;
  if (Object.keys(input).length != 0) response.data = input;
  return response;
};
