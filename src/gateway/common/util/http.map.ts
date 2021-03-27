import { IHttpRes } from '../interface/http.interface';

// HTTP statusCode and response map
export const httpMap: Map<string, IHttpRes> = new Map([
  // range 2XX
  [
    'throwhttp200',
    {
      statusCode: 200,
      message: 'OK',
    },
  ],
  [
    'throwhttp201',
    {
      statusCode: 201,
      message: 'Created',
    },
  ],
  [
    'throwhttp202',
    {
      statusCode: 202,
      message: 'Accepted',
    },
  ],
  [
    'throwhttp203',
    {
      statusCode: 203,
      message: 'Non-authoritative Information',
    },
  ],
  [
    'throwhttp204',
    {
      statusCode: 204,
      message: 'No Content',
    },
  ],
  [
    'throwhttp205',
    {
      statusCode: 205,
      message: 'Reset Content',
    },
  ],
  [
    'throwhttp206',
    {
      statusCode: 206,
      message: 'Partial Content',
    },
  ],
  [
    'throwhttp207',
    {
      statusCode: 207,
      message: 'Multi-Status',
    },
  ],
  [
    'throwhttp208',
    {
      statusCode: 208,
      message: 'Already Reported',
    },
  ],
  [
    'throwhttp226',
    {
      statusCode: 226,
      message: 'IM Used',
    },
  ],
  // range 3XX
  [
    'throwhttp300',
    {
      statusCode: 300,
      message: 'Multiple Choices',
    },
  ],
  [
    'throwhttp301',
    {
      statusCode: 301,
      message: 'Moved Permanently',
    },
  ],
  [
    'throwhttp302',
    {
      statusCode: 302,
      message: 'Found',
    },
  ],
  [
    'throwhttp303',
    {
      statusCode: 303,
      message: 'See Other',
    },
  ],
  [
    'throwhttp304',
    {
      statusCode: 304,
      message: 'Not Modified',
    },
  ],
  [
    'throwhttp305',
    {
      statusCode: 305,
      message: 'Use Proxy',
    },
  ],
  [
    'throwhttp307',
    {
      statusCode: 307,
      message: 'Temporary Redirect',
    },
  ],
  [
    'throwhttp308',
    {
      statusCode: 308,
      message: 'Permanent Redirect',
    },
  ],
  // range 4XX
  [
    'throwhttp400',
    {
      statusCode: 400,
      message: 'Bad Request',
    },
  ],
  [
    'throwhttp401',
    {
      statusCode: 401,
      message: 'Unauthorized',
    },
  ],
  [
    'throwhttp402',
    {
      statusCode: 402,
      message: 'Payment Required',
    },
  ],
  [
    'throwhttp403',
    {
      statusCode: 403,
      message: 'Forbidden',
    },
  ],
  [
    'throwhttp404',
    {
      statusCode: 404,
      message: 'Not Found',
    },
  ],
  [
    'throwhttp405',
    {
      statusCode: 405,
      message: 'Method Not Allowed',
    },
  ],
  [
    'throwhttp406',
    {
      statusCode: 406,
      message: 'Not Acceptable',
    },
  ],
  [
    'throwhttp407',
    {
      statusCode: 407,
      message: 'Proxy Authentication Required',
    },
  ],
  [
    'throwhttp408',
    {
      statusCode: 408,
      message: 'Request Timeout',
    },
  ],
  [
    'throwhttp409',
    {
      statusCode: 409,
      message: 'Conflict',
    },
  ],
  [
    'throwhttp410',
    {
      statusCode: 410,
      message: 'Gone',
    },
  ],
  [
    'throwhttp411',
    {
      statusCode: 411,
      message: 'Length Required',
    },
  ],
  [
    'throwhttp412',
    {
      statusCode: 412,
      message: 'Precondition Failed',
    },
  ],
  [
    'throwhttp413',
    {
      statusCode: 413,
      message: 'Payload Too Large',
    },
  ],
  [
    'throwhttp414',
    {
      statusCode: 414,
      message: 'Request-URI Too Long',
    },
  ],
  [
    'throwhttp415',
    {
      statusCode: 415,
      message: 'Unsupported Media Type',
    },
  ],
  [
    'throwhttp416',
    {
      statusCode: 416,
      message: 'Requested Range Not Satisfiable',
    },
  ],
  [
    'throwhttp417',
    {
      statusCode: 417,
      message: 'Expectation Failed',
    },
  ],
  [
    'throwhttp418',
    {
      statusCode: 418,
      message: "I'm a teapot",
    },
  ],
  [
    'throwhttp421',
    {
      statusCode: 421,
      message: 'Misdirected Request',
    },
  ],
  [
    'throwhttp422',
    {
      statusCode: 422,
      message: 'Unprocessable Entity',
    },
  ],
  [
    'throwhttp423',
    {
      statusCode: 423,
      message: 'Locked',
    },
  ],
  [
    'throwhttp424',
    {
      statusCode: 424,
      message: 'Failed Dependency',
    },
  ],
  [
    'throwhttp426',
    {
      statusCode: 426,
      message: 'Upgrade Required',
    },
  ],
  [
    'throwhttp428',
    {
      statusCode: 428,
      message: 'Precondition Required',
    },
  ],
  [
    'throwhttp429',
    {
      statusCode: 429,
      message: 'Too Many Requests',
    },
  ],
  [
    'throwhttp431',
    {
      statusCode: 431,
      message: 'Request Header Fields Too Large',
    },
  ],
  [
    'throwhttp444',
    {
      statusCode: 444,
      message: 'Connection Closed Without Response',
    },
  ],
  [
    'throwhttp451',
    {
      statusCode: 451,
      message: 'Unavailable For Legal Reasons',
    },
  ],
  [
    'throwhttp499',
    {
      statusCode: 499,
      message: 'Client Closed Request',
    },
  ],
  // range 5XX
  [
    'throwhttp500',
    {
      statusCode: 500,
      message: 'Internal Server Error',
    },
  ],
  [
    'throwhttp501',
    {
      statusCode: 501,
      message: 'Not Implemented',
    },
  ],
  [
    'throwhttp502',
    {
      statusCode: 502,
      message: 'Bad Gateway',
    },
  ],
  [
    'throwhttp503',
    {
      statusCode: 503,
      message: 'Service Unavailable',
    },
  ],
  [
    'throwhttp504',
    {
      statusCode: 504,
      message: 'Gateway Timeout',
    },
  ],
  [
    'throwhttp505',
    {
      statusCode: 505,
      message: 'HTTP Version Not Supported',
    },
  ],
  [
    'throwhttp506',
    {
      statusCode: 506,
      message: 'Variant Also Negotiates',
    },
  ],
  [
    'throwhttp507',
    {
      statusCode: 507,
      message: 'Insufficient Storage',
    },
  ],
  [
    'throwhttp508',
    {
      statusCode: 508,
      message: 'Loop Detected',
    },
  ],
  [
    'throwhttp510',
    {
      statusCode: 510,
      message: 'Not Extended',
    },
  ],
  [
    'throwhttp511',
    {
      statusCode: 511,
      message: 'Network Authentication Required',
    },
  ],
  [
    'throwhttp599',
    {
      statusCode: 599,
      message: 'Network Connect Timeout Error',
    },
  ],
]);
