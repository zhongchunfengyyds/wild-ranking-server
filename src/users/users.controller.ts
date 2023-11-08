import { Body, Controller, Dependencies, Get, Post, Req } from '@nestjs/common';
import { Public } from 'src/decorator';
import { UsersService } from './users.service';
import { RegisterUserDto } from './user.dto';
@Dependencies(UsersService)
@Controller('user')
export class UsersController {
  constructor(private readonly usersSeverice: UsersService) {}
  @Public()
  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    console.log(registerUserDto);
    return this.usersSeverice.create(registerUserDto);
  }
  @Get('profile')
  profile(@Req() req) {
    return req.user;
  }
}
