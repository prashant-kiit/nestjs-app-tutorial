import { Injectable, NotFoundException } from '@nestjs/common';

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
}
