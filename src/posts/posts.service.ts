import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return [
      { id: 1, name: 'How are you?' },
      { id: 2, name: 'Jai Sri Raam!!!' },
    ];
  }
}
