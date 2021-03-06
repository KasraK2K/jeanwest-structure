import { IHttpRes } from '../interface/http.interface';

// HTTP statusCode and response map
export const httpMap: Map<string, IHttpRes> = new Map([
  // range 2XX
  [
    '200',
    {
      type: 'DATA',
      statusCode: 200,
      code: 2000,
      title: '200 OK',
      message: 'Ok!',
      description: 'The request has been successful.',
    },
  ],
  [
    '201',
    {
      type: 'DATA',
      statusCode: 201,
      code: 2001,
      title: '201 CREATED',
      message: 'Created!',
      description: 'The request has been fulfilled.',
    },
  ],
  // range 4XX
  // 400 errors
  [
    'Error',
    {
      type: 'ERROR',
      statusCode: 400,
      code: 4000,
      title: 'Internal',
      message: 'Internal ERROR!',
      description: 'An internal error has occurred.',
    },
  ],
  [
    'ValidationError',
    {
      type: 'ERROR',
      statusCode: 400,
      code: 4001,
      title: 'Validation',
      message: 'Validation ERROR!',
      description: 'Your request cannot be validated.',
    },
  ],
  [
    'DataError',
    {
      type: 'ERROR',
      statusCode: 400,
      code: 4002,
      title: 'Validation',
      message: 'Validation ERROR!',
      description: 'Your request cannot be validated.',
    },
  ],
  [
    'OTPError',
    {
      type: 'ERROR',
      statusCode: 400,
      code: 4003,
      title: 'OTP',
      message: 'API Error!',
      description: 'OTP did not work correctly.',
    },
  ],
  // 401 errors
  [
    '401',
    {
      type: 'ERROR',
      statusCode: 401,
      code: 4004,
      title: '401 UNAUTHORIZED',
      message: 'Unauthorized!',
      description: 'Authentication is not possible.',
    },
  ],
  [
    'TokenExpiredError',
    {
      type: 'ERROR',
      statusCode: 401,
      code: 4005,
      title: 'Authorization',
      message: 'Unauthorized!',
      description: 'Token expired.',
    },
  ],
  [
    'JsonWebTokenError',
    {
      type: 'ERROR',
      statusCode: 401,
      code: 4006,
      title: 'Authorization',
      message: 'Unauthorized!',
      description: 'Token invalid.',
    },
  ],
  [
    'SyntaxError',
    {
      type: 'ERROR',
      statusCode: 401,
      code: 4007,
      title: 'Validation',
      message: 'SyntaxError!',
      description: 'Unexpected JSON format.',
    },
  ],
  // 403 errors
  [
    '403',
    {
      type: 'ERROR',
      statusCode: 403,
      code: 4008,
      title: '403 ACCESS FORBIDDEN',
      message: 'Blocked!',
      description: 'Access forbidden.',
    },
  ],
  // 404 errors
  [
    '404',
    {
      type: 'ERROR',
      statusCode: 404,
      code: 4009,
      title: '404 NOT FOUND',
      message: 'Not found!',
      description:
        "the request you were trying to reach couldn't be found on server",
    },
  ],
  // 409 errors
  [
    '409',
    {
      type: 'ERROR',
      statusCode: 409,
      code: 4010,
      title: '409 CONFLICT',
      message: 'Conflict!',
      description: 'The request could not be processed because of conflict.',
    },
  ],
  // range 5XX
  [
    '500',
    {
      type: 'ERROR',
      statusCode: 500,
      code: 5000,
      title: '500 INTERNAL SERVER ERROR',
      message: 'Server Error!',
      description:
        "the request you were trying to reach couldn't be handle on server",
    },
  ],
]);
