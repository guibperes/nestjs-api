import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { BookCreateDTO, BookUpdateDTO } from './BookDTO';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  constructor(title: string, description: string, pages: number) {
    this.title = title;
    this.description = description;
    this.pages = pages;
  }

  static buildFromDTO({ title, description, pages }: BookCreateDTO): Book {
    return new Book(title, description, pages);
  }

  mergeFromDTO({ title, description, pages }: BookUpdateDTO): Book {
    return { ...this, title, description, pages };
  }
}
