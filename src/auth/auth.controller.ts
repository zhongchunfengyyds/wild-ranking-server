import {
  Controller,
  Dependencies,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../decorator';
import { LoginDto } from './auth.dto';

@Dependencies(AuthService)
@Controller('auth')
export class AuthController {
  authService: AuthService;
  constructor(authService) {
    this.authService = authService;
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
