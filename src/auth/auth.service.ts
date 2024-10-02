import {
  ConflictException,
  HttpCode,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/helpers/bcrypt.helper';
import { sendResponse } from 'src/helpers/response.helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly userModel: Repository<Auth>,
  ) {}

  async signInUser(createAuthDto: CreateAuthDto) {
    const { userName, email, password, firstName, lastName } = createAuthDto;
    const userExist = await this.userModel.find({ where: { email } });
    if (userExist) {
      throw new ConflictException('user already exists in the system!');
    }
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword, 'hashed password generated!');

    const newUser = await this.userModel.create({
      userName,
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    await this.userModel.save(newUser);
    let response = sendResponse(
      HttpStatus.CREATED,
      'user created successfully',
      { name: newUser.userName, password: newUser.password },
    );
    return response;
  }
}
