import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username) {
    return this.users.find((user) => user.username === username);
  }
}
