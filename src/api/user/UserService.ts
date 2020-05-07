import { Injectable } from '@nestjs/common';

import { EntityNotFoundException } from '../../exceptions';
import { User } from './User';
import { UserCreateDTO, UserUpdateDTO } from './UserDTO';

let users: User[] = [];

@Injectable()
export class UserService {
  async create(userDTO: UserCreateDTO): Promise<User> {
    const user = User.buildFromDTO(userDTO);
    users.push(user);

    return user;
  }

  async updateById(id: number, userDTO: UserUpdateDTO): Promise<User> {
    const savedUser = await this.findById(id);

    const updatedUser = { ...savedUser, ...userDTO };
    const userIndex = users.findIndex(user => user.id === id);
    users[userIndex] = updatedUser;

    return updatedUser;
  }

  async deleteById(id: number): Promise<void> {
    const savedUser = await this.findById(id);

    users = users.filter(user => user.id !== savedUser.id);
  }

  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: number): Promise<User> {
    const savedUser = users.filter(user => user.id === id)[0];

    if (!savedUser) {
      throw new EntityNotFoundException('User');
    }

    return savedUser;
  }
}
