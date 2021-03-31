import { clientSideError, serverSideError } from '../constant/http.map.const';
import { IErrorArgs, IErrorThrown } from '../interface/error.interface';
import { httpMap } from '../util/http.map';

export default function errorHandler({
  name,
  message,
  data,
}: IErrorArgs): IErrorThrown | any {
  console.log(name);
  const arrayContainingServerSideErrors = Object.values(serverSideError);
  const arrayContainingClientSideErrors = Object.values(clientSideError);
  const arrayContainingAllErrors = [
    ...arrayContainingClientSideErrors,
    ...arrayContainingServerSideErrors,
  ];
  if (arrayContainingAllErrors.includes(name)) {
    const errorObject = {
      statusCode: httpMap.get(name).statusCode,
      message: message || httpMap.get(name).message,
      data: data,
    };
    throw errorObject;
  } else {
    throw Error('Invalid HTTP Expectation Thrown');
  }
}
