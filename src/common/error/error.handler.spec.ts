import { redirection, clientSideError } from '../constant/http.map.const';
import errorHandler from './error.handler';

describe('throw the right error based on the argument passed in to the errorHandler function', () => {
  it('should throw an error object for HTTP statusCode of 4xx to 5xx range', () => {
    const errorObject = { statusCode: 418, message: "I'm a teapot" };
    let error: any;
    try {
      errorHandler({
        name: clientSideError.HTTP_EQUIVALENT_STATUSCODE_418,
      });
    } catch (err) {
      error = err;
    }
    expect(error).toEqual(JSON.stringify(errorObject));
  });
  it('should throw an interal server error object due to invalid argument passed in to the errorHandler function', () => {
    const errorObject = { statusCode: 500, message: 'Invalid HTTP Exception' };
    let error: any;
    try {
      errorHandler({ name: redirection.HTTP_EQUIVALENT_STATUSCODE_300 });
    } catch (err) {
      error = err;
    }
    expect(error).toEqual(JSON.stringify(errorObject));
  });
});
