import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EntityNotFoundException } from '../../exceptions';
import { Book } from './Book';
import { BookRepository } from './BookRepository';
import { BookCreateDTO, BookUpdateDTO } from './BookDTO';

@Injectable()
export class BookService {
  @InjectRepository(Book)
  private readonly repo: BookRepository;

  async create(bookDTO: BookCreateDTO): Promise<Book> {
    return this.repo.save(Book.buildFromDTO(bookDTO));
  }

  async updateById(id: number, bookDTO: BookUpdateDTO): Promise<Book> {
    const book = await this.findById(id);
    const newBook = book.mergeFromDTO(bookDTO);

    return this.repo.save(newBook);
  }

  async deleteById(id: number): Promise<void> {
    const book = await this.findById(id);

    this.repo.delete(book);
  }

  async findAll(): Promise<Book[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<Book> {
    const book = await this.repo.findOne(id);

    if (!book) {
      throw new EntityNotFoundException('Book');
    }

    return book;
  }
}
