import { IHttpReq, IHttpRes } from '../common/interface/http.interface';
import { httpMap } from '../common/util/http.map';

export const responseTransformer = (input: IHttpReq): IHttpRes => {
  const key = input.resKey ? String(input.resKey) : '200';
  if (input.accessToken) {
    delete input.statusCode;
    delete input.result;
  }
  const response = httpMap.get(key);
  delete input.resKey;
  if (Object.keys(input).length != 0) response.data = input;
  return response;
};
