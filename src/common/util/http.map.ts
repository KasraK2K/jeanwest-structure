import { IHttpRes } from 'src/gateway/common/interface/http.interface';

// HTTP statusCode and response map
export const httpMap: Map<string, IHttpRes> = new Map([
  // range 2XX
  [
    '200',
    {
      statusCode: 200,
      message: 'OK',
    },
  ],
  [
    '201',
    {
      statusCode: 201,
      message: 'Created',
    },
  ],
  [
    '202',
    {
      statusCode: 202,
      message: 'Accepted',
    },
  ],
  [
    '203',
    {
      statusCode: 203,
      message: 'Non-authoritative Information',
    },
  ],
  [
    '204',
    {
      statusCode: 204,
      message: 'No Content',
    },
  ],
  [
    '205',
    {
      statusCode: 205,
      message: 'Reset Content',
    },
  ],
  [
    '206',
    {
      statusCode: 206,
      message: 'Partial Content',
    },
  ],
  [
    '207',
    {
      statusCode: 207,
      message: 'Multi-Status',
    },
  ],
  [
    '208',
    {
      statusCode: 208,
      message: 'Already Reported',
    },
  ],
  [
    '226',
    {
      statusCode: 226,
      message: 'IM Used',
    },
  ],
  // range 3XX
  [
    '300',
    {
      statusCode: 300,
      message: 'Multiple Choices',
    },
  ],
  [
    '301',
    {
      statusCode: 301,
      message: 'Moved Permanently',
    },
  ],
  [
    '302',
    {
      statusCode: 302,
      message: 'Found',
    },
  ],
  [
    '303',
    {
      statusCode: 303,
      message: 'See Other',
    },
  ],
  [
    '304',
    {
      statusCode: 304,
      message: 'Not Modified',
    },
  ],
  [
    '305',
    {
      statusCode: 305,
      message: 'Use Proxy',
    },
  ],
  [
    '307',
    {
      statusCode: 307,
      message: 'Temporary Redirect',
    },
  ],
  [
    '308',
    {
      statusCode: 308,
      message: 'Permanent Redirect',
    },
  ],
  // range 4XX
  [
    '400',
    {
      statusCode: 400,
      message: 'Bad Request',
    },
  ],
  [
    '401',
    {
      statusCode: 401,
      message: 'Unauthorized',
    },
  ],
  [
    '402',
    {
      statusCode: 402,
      message: 'Payment Required',
    },
  ],
  [
    '403',
    {
      statusCode: 403,
      message: 'Forbidden',
    },
  ],
  [
    '404',
    {
      statusCode: 404,
      message: 'Not Found',
    },
  ],
  [
    '405',
    {
      statusCode: 405,
      message: 'Method Not Allowed',
    },
  ],
  [
    '406',
    {
      statusCode: 406,
      message: 'Not Acceptable',
    },
  ],
  [
    '407',
    {
      statusCode: 407,
      message: 'Proxy Authentication Required',
    },
  ],
  [
    '408',
    {
      statusCode: 408,
      message: 'Request Timeout',
    },
  ],
  [
    '409',
    {
      statusCode: 409,
      message: 'Conflict',
    },
  ],
  [
    '410',
    {
      statusCode: 410,
      message: 'Gone',
    },
  ],
  [
    '411',
    {
      statusCode: 411,
      message: 'Length Required',
    },
  ],
  [
    '412',
    {
      statusCode: 412,
      message: 'Precondition Failed',
    },
  ],
  [
    '413',
    {
      statusCode: 413,
      message: 'Payload Too Large',
    },
  ],
  [
    '414',
    {
      statusCode: 414,
      message: 'Request-URI Too Long',
    },
  ],
  [
    '415',
    {
      statusCode: 415,
      message: 'Unsupported Media Type',
    },
  ],
  [
    '416',
    {
      statusCode: 416,
      message: 'Requested Range Not Satisfiable',
    },
  ],
  [
    '417',
    {
      statusCode: 417,
      message: 'Expectation Failed',
    },
  ],
  [
    '418',
    {
      statusCode: 418,
      message: "I'm a teapot",
    },
  ],
  [
    '421',
    {
      statusCode: 421,
      message: 'Misdirected Request',
    },
  ],
  [
    '422',
    {
      statusCode: 422,
      message: 'Unprocessable Entity',
    },
  ],
  [
    '423',
    {
      statusCode: 423,
      message: 'Locked',
    },
  ],
  [
    '424',
    {
      statusCode: 424,
      message: 'Failed Dependency',
    },
  ],
  [
    '426',
    {
      statusCode: 426,
      message: 'Upgrade Required',
    },
  ],
  [
    '428',
    {
      statusCode: 428,
      message: 'Precondition Required',
    },
  ],
  [
    '429',
    {
      statusCode: 429,
      message: 'Too Many Requests',
    },
  ],
  [
    '431',
    {
      statusCode: 431,
      message: 'Request Header Fields Too Large',
    },
  ],
  [
    '444',
    {
      statusCode: 444,
      message: 'Connection Closed Without Response',
    },
  ],
  [
    '451',
    {
      statusCode: 451,
      message: 'Unavailable For Legal Reasons',
    },
  ],
  [
    '499',
    {
      statusCode: 499,
      message: 'Client Closed Request',
    },
  ],
  // range 5XX
  [
    '500',
    {
      statusCode: 500,
      message: 'Internal Server Error',
    },
  ],
  [
    '501',
    {
      statusCode: 501,
      message: 'Not Implemented',
    },
  ],
  [
    '502',
    {
      statusCode: 502,
      message: 'Bad Gateway',
    },
  ],
  [
    '503',
    {
      statusCode: 503,
      message: 'Service Unavailable',
    },
  ],
  [
    '504',
    {
      statusCode: 504,
      message: 'Gateway Timeout',
    },
  ],
  [
    '505',
    {
      statusCode: 505,
      message: 'HTTP Version Not Supported',
    },
  ],
  [
    '506',
    {
      statusCode: 506,
      message: 'Variant Also Negotiates',
    },
  ],
  [
    '507',
    {
      statusCode: 507,
      message: 'Insufficient Storage',
    },
  ],
  [
    '508',
    {
      statusCode: 508,
      message: 'Loop Detected',
    },
  ],
  [
    '510',
    {
      statusCode: 510,
      message: 'Not Extended',
    },
  ],
  [
    '511',
    {
      statusCode: 511,
      message: 'Network Authentication Required',
    },
  ],
  [
    '599',
    {
      statusCode: 599,
      message: 'Network Connect Timeout Error',
    },
  ],
]);
