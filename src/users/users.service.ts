import { Injectable } from '@nestjs/common';
import { signUpDTO } from './dto/sign-up.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './entity/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>){
    }
    async userSignUp(payload: signUpDTO){
        return await this.userModel.create(payload)
    }
}
