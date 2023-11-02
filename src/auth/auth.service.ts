import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as md5 from 'md5';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;
  usersService: UsersService;
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async validateUser(email, pass) {
    const user = await this.usersService.findOneByEmail(email);
    if (user && md5(pass) === user.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const userDetail = await this.usersService.findOneByEmail(user.email);
    const payload = { email: userDetail.email, id: userDetail.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
