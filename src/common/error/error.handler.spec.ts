import { clientSideError } from '../constant/http.map.const';
import errorHandler from './error.handler';

it('should throw an error object', () => {
  const errorObject = { statusCode: 418, message: "I'm a teapot" };
  let error;
  try {
    errorHandler({
      name: clientSideError.HTTP_EQUIVALENT_STATUSCODE_418,
    });
  } catch (err) {
    error = err;
  }
  expect(error).toEqual(JSON.stringify(errorObject));
});
