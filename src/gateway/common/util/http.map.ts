import { IHttpRes } from '../interface/http.interface';

// HTTP statusCode and response map
export const httpMap: Map<string, IHttpRes> = new Map([
  // range 2XX
  [
    '200',
    {
      statusCode: 200,
      message: 'Ok!',
    },
  ],
  [
    '201',
    {
      statusCode: 201,
      message: 'Created!',
    },
  ],
  // range 4XX
  // 400 errors
  [
    'Error',
    {
      statusCode: 400,
      message: 'Internal ERROR!',
    },
  ],
  [
    'ValidationError',
    {
      statusCode: 400,
      message: 'Validation ERROR!',
    },
  ],
  [
    'DataError',
    {
      statusCode: 400,
      message: 'Validation ERROR!',
    },
  ],
  [
    'OTPError',
    {
      statusCode: 400,
      message: 'API Error!',
    },
  ],
  // 401 errors
  [
    '401',
    {
      statusCode: 401,
      message: 'Unauthorized!',
    },
  ],
  [
    'TokenExpiredError',
    {
      statusCode: 401,
      message: 'Unauthorized!',
    },
  ],
  [
    'JsonWebTokenError',
    {
      statusCode: 401,
      message: 'Unauthorized!',
    },
  ],
  [
    'SyntaxError',
    {
      statusCode: 401,
      message: 'SyntaxError!',
    },
  ],
  // 403 errors
  [
    '403',
    {
      statusCode: 403,
      message: 'Forbidden!',
    },
  ],
  // 404 errors
  [
    '404',
    {
      statusCode: 404,
      message: 'Not found!',
    },
  ],
  // 409 errors
  [
    '409',
    {
      statusCode: 409,
      message: 'Conflict!',
    },
  ],
  [
    '429',
    {
      statusCode: 429,
      message: 'Too Many Requests!'
    },
  ],
  // range 5XX
  [
    '500',
    {
      statusCode: 500,
      message: 'Server Error!',
    },
  ],
]);
