import { IError } from '../interface/error.interface';

const errorHandler = ({ name, message, data }: IError) => {
  const errorObject = { name: name, message: message, data: data };
  throw errorObject;
};

export default errorHandler;
