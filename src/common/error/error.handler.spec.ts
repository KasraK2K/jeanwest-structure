import errorHandler from './error.handler';

it('should throw an error object', () => {
  const errorArgs = {
    name: '400',
    message: 'ooops!',
    data: [{ foo: 'fooBar' }, { foo: 'fooBar' }],
  };
  const errorObjectThrown = {
    name: 400,
    message: 'oooops!',
    data: [{ foo: 'fooBar' }, { foo: 'fooBar' }],
  };
  expect(errorHandler(errorArgs)).toThrow(errorObjectThrown);
  console.log('yo!');
  console.log('log this', errorHandler(errorArgs));
});
