import { IHttpRes } from 'src/common/interface/http.interface';
import {
  sucsses,
  redirection,
  clientSideError,
  serverSideError,
} from 'src/common/constant/http.map.const';

// HTTP statusCode and response map
export const httpMap: Map<string, IHttpRes> = new Map([
  // range 2XX
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_200,
    {
      statusCode: 200,
      message: 'OK',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_201,
    {
      statusCode: 201,
      message: 'Created',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_202,
    {
      statusCode: 202,
      message: 'Accepted',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_203,
    {
      statusCode: 203,
      message: 'Non-authoritative Information',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_204,
    {
      statusCode: 204,
      message: 'No Content',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_205,
    {
      statusCode: 205,
      message: 'Reset Content',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_206,
    {
      statusCode: 206,
      message: 'Partial Content',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_207,
    {
      statusCode: 207,
      message: 'Multi-Status',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_208,
    {
      statusCode: 208,
      message: 'Already Reported',
    },
  ],
  [
    sucsses.HTTP_EQUIVALENT_STATUSCODE_226,
    {
      statusCode: 226,
      message: 'IM Used',
    },
  ],
  // range 3XX
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_300,
    {
      statusCode: 300,
      message: 'Multiple Choices',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_301,
    {
      statusCode: 301,
      message: 'Moved Permanently',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_302,
    {
      statusCode: 302,
      message: 'Found',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_303,
    {
      statusCode: 303,
      message: 'See Other',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_304,
    {
      statusCode: 304,
      message: 'Not Modified',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_305,
    {
      statusCode: 305,
      message: 'Use Proxy',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_307,
    {
      statusCode: 307,
      message: 'Temporary Redirect',
    },
  ],
  [
    redirection.HTTP_EQUIVALENT_STATUSCODE_308,
    {
      statusCode: 308,
      message: 'Permanent Redirect',
    },
  ],
  // range 4XX
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_400,
    {
      statusCode: 400,
      message: 'Bad Request',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_401,
    {
      statusCode: 401,
      message: 'Unauthorized',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_402,
    {
      statusCode: 402,
      message: 'Payment Required',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_403,
    {
      statusCode: 403,
      message: 'Forbidden',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_404,
    {
      statusCode: 404,
      message: 'Not Found',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_405,
    {
      statusCode: 405,
      message: 'Method Not Allowed',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_406,
    {
      statusCode: 406,
      message: 'Not Acceptable',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_407,
    {
      statusCode: 407,
      message: 'Proxy Authentication Required',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_408,
    {
      statusCode: 408,
      message: 'Request Timeout',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_409,
    {
      statusCode: 409,
      message: 'Conflict',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_410,
    {
      statusCode: 410,
      message: 'Gone',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_411,
    {
      statusCode: 411,
      message: 'Length Required',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_412,
    {
      statusCode: 412,
      message: 'Precondition Failed',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_413,
    {
      statusCode: 413,
      message: 'Payload Too Large',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_414,
    {
      statusCode: 414,
      message: 'Request-URI Too Long',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_415,
    {
      statusCode: 415,
      message: 'Unsupported Media Type',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_416,
    {
      statusCode: 416,
      message: 'Requested Range Not Satisfiable',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_417,
    {
      statusCode: 417,
      message: 'Expectation Failed',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_418,
    {
      statusCode: 418,
      message: "I'm a teapot",
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_421,
    {
      statusCode: 421,
      message: 'Misdirected Request',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_422,
    {
      statusCode: 422,
      message: 'Unprocessable Entity',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_423,
    {
      statusCode: 423,
      message: 'Locked',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_424,
    {
      statusCode: 424,
      message: 'Failed Dependency',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_426,
    {
      statusCode: 426,
      message: 'Upgrade Required',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_428,
    {
      statusCode: 428,
      message: 'Precondition Required',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_429,
    {
      statusCode: 429,
      message: 'Too Many Requests',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_431,
    {
      statusCode: 431,
      message: 'Request Header Fields Too Large',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_444,
    {
      statusCode: 444,
      message: 'Connection Closed Without Response',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_451,
    {
      statusCode: 451,
      message: 'Unavailable For Legal Reasons',
    },
  ],
  [
    clientSideError.HTTP_EQUIVALENT_STATUSCODE_499,
    {
      statusCode: 499,
      message: 'Client Closed Request',
    },
  ],
  // range 5XX
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_500,
    {
      statusCode: 500,
      message: 'Internal Server Error',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_501,
    {
      statusCode: 501,
      message: 'Not Implemented',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_502,
    {
      statusCode: 502,
      message: 'Bad Gateway',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_503,
    {
      statusCode: 503,
      message: 'Service Unavailable',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_504,
    {
      statusCode: 504,
      message: 'Gateway Timeout',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_505,
    {
      statusCode: 505,
      message: 'HTTP Version Not Supported',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_506,
    {
      statusCode: 506,
      message: 'Variant Also Negotiates',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_507,
    {
      statusCode: 507,
      message: 'Insufficient Storage',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_508,
    {
      statusCode: 508,
      message: 'Loop Detected',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_510,
    {
      statusCode: 510,
      message: 'Not Extended',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_511,
    {
      statusCode: 511,
      message: 'Network Authentication Required',
    },
  ],
  [
    serverSideError.HTTP_EQUIVALENT_STATUSCODE_599,
    {
      statusCode: 599,
      message: 'Network Connect Timeout Error',
    },
  ],
]);
