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
  Inject,
} from '@nestjs/common';

import { Book } from './Book';
import { BookDTO } from './BookDTO';
import { BookService } from './BookService';

let books: Book[] = [];

@Controller('books')
export class BookController {
  @Inject()
  private readonly bookService: BookService;

  @Post()
  async create(@Body() bookDTO: BookDTO): Promise<Book> {
    return this.bookService.create(bookDTO);
  }

  @Put(':id')
  async updateById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() bookDTO: BookDTO,
  ): Promise<Book> {
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
  async deleteById(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    const book = books.filter(bookData => bookData.id === id)[0];

    if (!book) {
      throw new HttpException(
        'Cannot find book with provided id',
        HttpStatus.NOT_FOUND,
      );
    }

    books = books.filter(bookData => bookData.id !== id);
  }

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
