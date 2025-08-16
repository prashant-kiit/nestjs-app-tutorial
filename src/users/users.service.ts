import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDao } from './dao/users.dao';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Prashant' },
    { id: 2, name: 'Chinku' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    // throw new Error('hello hello : ' + id);
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(dto: CreateUserDto): UserDao {
    const newUser = {
      id: Date.now(),
      name: dto.name,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, dto: UpdateUserDto): UserDao {
    const user = this.users.find((user) => user.id === id);
    if (user && dto.name) {
      user.name = dto.name;
    }
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }
}
