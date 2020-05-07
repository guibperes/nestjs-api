import {
  Controller,
  Inject,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { UserService } from './UserService';
import { User } from './User';
import { UserCreateDTO, UserUpdateDTO } from './UserDTO';

@Controller('users')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  async create(@Body() userDTO: UserCreateDTO): Promise<User> {
    return this.userService.create(userDTO);
  }

  @Put(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDTO: UserUpdateDTO,
  ): Promise<User> {
    return this.userService.updateById(id, userDTO);
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userService.deleteById(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findById(id);
  }
}
