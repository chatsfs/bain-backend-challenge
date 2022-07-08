import { BadRequestException } from '@nestjs/common';

export class ErrorException extends Error {
  public msg: string;
  constructor(msg) {
    super(msg);
    this.msg = msg;
  }
}

export const throwError = (msg: string) => {
  throw new ErrorException(msg);
};

export const throwException = (
  errorException: ErrorException,
  error: string,
) => {
  throw new BadRequestException(errorException.msg || error);
};
