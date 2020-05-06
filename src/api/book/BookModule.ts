import { Module } from '@nestjs/common';

import { BookController } from './BookController';

@Module({
  controllers: [BookController],
})
export class BookModule {}
