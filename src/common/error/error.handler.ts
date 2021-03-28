import { IError } from '../interface/error.interface';

const errorHandler = ({ name, message, data }: IError) => {
  const errorObject = {
    statusCode: name,
    message: message,
    data: data,
  };
  throw errorObject;
};

export default errorHandler;
