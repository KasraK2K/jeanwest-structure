export interface IHttpRes {
    type: 'DATA' | 'ERROR'
    statusCode: number;
    code: number,
    message: string;
    title: string;
    description: string;
    data?: Record<string, unknown>;
}

export interface IHttpReq {
    [key: string]: Record<string, unknown>;
}