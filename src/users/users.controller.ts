import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common'
import { signUpDTO } from './dto/sign-up.dto'
import { Request, Response } from 'express'
import { deleteUserDTO } from './dto/delete-user.dto'
import { sendResponse } from 'src/helpers/response.helper'
import { hashPassword } from 'src/helpers/bcryptjs.helper'
import { UsersService } from './users.service'

const users = []

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService){

  }


  @Post("sign-up")
  async userSignUp(@Body() signUpDto :signUpDTO){
   return await this.userService.userSignUp(signUpDto)

  }
  @Get("all")
  retrieveAllUsers(): any{
  }
}
