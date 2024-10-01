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

const users = []

@Controller('users')
export class UsersController {
  @Post('sign-up')
  async createUser (@Body() signUpDto: signUpDTO) {
    const hashedPassword =  await hashPassword(signUpDto?.password)
    const newUser = users.push({... signUpDto, password: hashedPassword})
    let response = sendResponse(
      HttpStatus.CREATED,
      'user added successfully!',
      {... signUpDto, password: hashedPassword}
    )
    return response
  }
  @Get('userById/:id')
  async getUserById (@Param() params: any) {
    const userToFind = users.find(user => user._id === params.id)
    if (!userToFind) {
      throw new ConflictException('user not found')
    }
    let response = sendResponse(HttpStatus.OK, 'user found', userToFind)
    return response
  }
  @Get('all')
  async getAllUsers () {
    let response = sendResponse(HttpStatus.OK, 'all users fetched', users)
    return response
  }
  @Delete('deleteUser/:id')
  async deleteUser (
    @Body() deleteUserDto: deleteUserDTO,
    @Param('id') userId: any,
  ): Promise<any> {
    const userToDelete = users.find(user => user._id === userId)
    if (!userToDelete) {
      throw new ConflictException('user not found')
    }
    const deletedUser = users.splice(users.indexOf(userToDelete), 1)
    // console.log("users array after deletion", users);
    let response = sendResponse(HttpStatus.OK, 'user deleted successfully')
    return response
  }

  @Put("updateUser/:id")
  async updateUser (
    @Param('id') userId: any,
    @Body() signUpDto: signUpDTO,
  ): Promise<any> {
    const updateUser = users.find(user => user._id === userId)
    if (!updateUser) {
      console.log('user not found')
      throw new ConflictException('user not found!')
    }
    Object.assign(updateUser, signUpDto)
    let response = sendResponse(
      HttpStatus.OK,
      'user updated successfully',
      updateUser,
    )
    return response
  }


  @Get("get-ip")
  getUserIP(@Req() req: Request): any{
    let response = sendResponse(HttpStatus.OK, "Ip created", req.ip)
    console.log("req", req.ip)
    return response
  }

}
