import { Module } from '@nestjs/common';

import { BookController } from './BookController';
import { BookService } from './BookService';

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
