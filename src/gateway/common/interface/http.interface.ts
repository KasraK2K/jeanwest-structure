export interface IHttpRes {
    statusCode: number;
    message: string;
    data?: Record<string, unknown>;
}

export interface IHttpReq {
    [key: string]: Record<string, unknown>;
}