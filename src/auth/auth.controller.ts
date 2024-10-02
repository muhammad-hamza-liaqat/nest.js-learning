import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-in")
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signInUser(createAuthDto);
  }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }
}
