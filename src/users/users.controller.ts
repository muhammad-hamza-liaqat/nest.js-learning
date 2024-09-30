import { Body, ConflictException, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { signUpDTO } from './dto/sign-up.dto';
import { Response } from 'express';

const users = [];

@Controller('users')
export class UsersController {
    @Post("sign-up")
    async createUser(@Body() signUpDto: signUpDTO, @Res() res: Response){
        const newUser = users.push(signUpDto)
        // console.log("new user added", newUser)
        return res.status(HttpStatus.CREATED).json({ message: "new user added successfully!"})
    }
    @Get("all-users/:id")
    async getAllUsers(@Param() params: any){
        const userToFind = users.find((user)=> user._id === params.id)
        if (!userToFind){
            throw new ConflictException("user not found")
        }
        return userToFind
    }

}
