import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor(entity: string) {
    super(
      {
        name: 'EntityNotFoundException',
        message: `Cannot find ${entity} with provided id`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
