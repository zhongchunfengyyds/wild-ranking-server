import { Body, Controller, Dependencies, Get, Post, Req } from '@nestjs/common';
import { Public } from 'src/decorator';
import { UsersService } from './users.service';
import { CreateCatDto } from './user.dto';
@Dependencies(UsersService)
@Controller('user')
export class UsersController {
  constructor(private readonly usersSeverice: UsersService) {}
  @Public()
  @Post('register')
  registerUser(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.usersSeverice.create(createCatDto);
  }
  @Get('profile')
  profile(@Req() req) {
    return req.user;
  }
}
