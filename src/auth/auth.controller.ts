import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { loginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  async create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signInUser(createAuthDto);
  }

  @Post("login")
  async loginUser(@Body() loginDto: loginAuthDto){
    return this.authService.loginUser(loginDto)
  }
}
