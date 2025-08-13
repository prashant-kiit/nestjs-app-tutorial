import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 1, name: 'Prashant' },
      { id: 2, name: 'Alex' },
    ];
  }
}
