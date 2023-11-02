import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './user.dto';
import * as md5 from 'md5';
@Injectable()
@Dependencies(getRepositoryToken(User))
export class UsersService {
  private readonly usersRepository: Repository<User>;
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOneById(id) {
    return this.usersRepository.findOneBy({ id });
  }
  findOneByEmail(email) {
    return this.usersRepository.findOneBy({ email });
  }

  async create(user: CreateCatDto) {
    const have = await this.findOneByEmail(user.email);
    if (have) {
      return {
        statusCode: '400',
        message: '用户已存在',
      };
    } else {
      user.password = md5(user.password);
      this.usersRepository.save(user);
      return {
        statusCode: '200',
        message: '注册成功',
      };
    }
  }

  async remove(id) {
    await this.usersRepository.delete(id);
  }
}
