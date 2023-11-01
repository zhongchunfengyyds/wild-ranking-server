import {
  Controller,
  Dependencies,
  Bind,
  Get,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './decorator';

@Dependencies(AuthService)
@Controller()
export class AppController {
  authService: AuthService;
  constructor(authService) {
    this.authService = authService;
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Request())
  async login(req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @Bind(Request())
  getProfile(req) {
    return req.user;
  }
}
