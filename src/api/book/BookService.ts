import { Injectable } from '@nestjs/common';

import { EntityNotFoundException } from '../../exceptions';
import { Book } from './Book';
import { BookCreateDTO, BookUpdateDTO } from './BookDTO';

let books: Book[] = [];

@Injectable()
export class BookService {
  async create(bookDTO: BookCreateDTO): Promise<Book> {
    const book = Book.buildFromDTO(bookDTO);
    books.push(book);

    return book;
  }

  async updateById(id: number, bookDTO: BookUpdateDTO): Promise<Book> {
    const savedBook = await this.findById(id);

    const updatedBook = { ...savedBook, ...bookDTO };
    const bookIndex = books.findIndex(book => book.id === id);
    books[bookIndex] = updatedBook;

    return updatedBook;
  }

  async deleteById(id: number): Promise<void> {
    const savedBook = await this.findById(id);

    books = books.filter(book => book.id !== savedBook.id);
  }

  async findAll(): Promise<Book[]> {
    return books;
  }

  async findById(id: number): Promise<Book> {
    const savedBook = books.filter(book => book.id === id)[0];

    if (!savedBook) {
      throw new EntityNotFoundException('Book');
    }

    return savedBook;
  }
}
