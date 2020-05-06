import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Book } from './Book';
import { BookDTO } from './BookDTO';

const books: Book[] = [];

@Controller('books')
export class BookController {
  @Post()
  async create(@Body() bookDTO: BookDTO): Promise<Book> {
    const book = Book.buildFromDTO(bookDTO);

    books.push(book);
    return book;
  }

  @Put(':id')
  updateById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() bookDTO: BookDTO,
  ): Book {
    const book = books.filter(bookData => bookData.id === id)[0];

    if (!book) {
      throw new HttpException(
        'Cannot find book with provided id',
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedBook = { ...book, ...bookDTO };
    const bookIndex = books.findIndex(bookData => bookData.id === id);
    books[bookIndex] = updatedBook;

    return updatedBook;
  }

  @Delete(':id')
  deleteById() {}

  @Get()
  async findAll(): Promise<Book[]> {
    return books;
  }

  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id: number): Promise<Book> {
    const book = books.filter(bookData => bookData.id === id)[0];

    if (!book) {
      throw new HttpException(
        'Cannot find book with provided id',
        HttpStatus.NOT_FOUND,
      );
    }

    return book;
  }
}
