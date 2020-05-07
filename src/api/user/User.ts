import { UserCreateDTO } from './UserDTO';

export class User {
  id: number;
  name: string;
  email: string;
  birthDate: Date;

  constructor(id: number, name: string, email: string, birthDate: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
  }

  static buildFromDTO({ name, email, birthDate }: UserCreateDTO): User {
    const id = Math.floor(Math.random() * 100);

    return new User(id, name, email, birthDate);
  }
}
