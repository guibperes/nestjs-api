import {
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    const timestamp = Date.now();
    const response =
      exception instanceof HttpException
        ? {
            timestamp,
            status: exception.getStatus(),
            error: exception.getResponse(),
          }
        : {
            timestamp,
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: { name: exception.name, message: exception.message },
          };

    res.status(response.status).json(response);
  }
}
