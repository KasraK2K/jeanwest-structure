import { clientSideError } from '../constant/http.map.const';
import errorHandler from './error.handler';

it('should throw an error object', () => {
  const errorArgs = {
    name: clientSideError.HTTP_EQUIVALENT_STATUSCODE_400,
    message: 'ooops!',
    data: ['foo', { fooBar: 'fooBar' }],
  };
  expect(errorHandler(errorArgs)).toThrow(Error());
});
