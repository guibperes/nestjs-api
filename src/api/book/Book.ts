import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../../base';
import { BookCreateDTO, BookUpdateDTO } from './BookDTO';

@Entity()
export class Book extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  constructor(title: string, description: string, pages: number) {
    super();

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
