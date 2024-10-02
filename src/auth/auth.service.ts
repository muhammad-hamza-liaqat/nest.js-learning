import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, authDocument } from './entities/auth.schema';
import { Model } from 'mongoose';
import { hashPassword } from 'src/helpers/bcrypt.helper';
import { sendResponse } from 'src/helpers/response.helper';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<authDocument>){

  }
  async signInUser(createAuthDto: CreateAuthDto) {
    const password = createAuthDto.password;
    // console.log(password, "payload password");
    const hashedPassword = await hashPassword(password);
    const newUser = await this.authModel.create({...createAuthDto, password: hashedPassword})
    let response = sendResponse(HttpStatus.CREATED, "user created successfully!", newUser._id)
    return response
  }

}