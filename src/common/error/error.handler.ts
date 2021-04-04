import { clientSideError, serverSideError } from '../constant/http.map.const';
import { IErrorArgs } from '../interface/error.interface';
import { httpMap } from '../util/http.map';

export default function errorHandler({ name, message, data }: IErrorArgs) {
  const arrayContainingServerSideErrors = Object.values(serverSideError);
  const arrayContainingClientSideErrors = Object.values(clientSideError);
  const arrayContainingAllErrors = [
    ...arrayContainingClientSideErrors,
    ...arrayContainingServerSideErrors,
  ];
  if (arrayContainingAllErrors.includes(name)) {
    const errorObject: any = {
      statusCode: httpMap.get(name).statusCode,
      message: message || httpMap.get(name).message,
    };
    if (data) {
      errorObject.data = data;
    }
    throw errorObject;
  } else {
    throw {
      statusCode: 500,
      message: 'Invalid HTTP Exception',
    };
  }
}
