import {
  BadRequestException,
  ConflictException,
  HttpCode,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compareHashPassword, hashPassword } from 'src/helpers/bcrypt.helper';
import { sendResponse } from 'src/helpers/response.helper';
import { loginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly userModel: Repository<Auth>,
    private readonly jwt: JwtService,
  ) {}
  async signInUser(createAuthDto: CreateAuthDto) {
    const { userName, email, password, firstName, lastName } = createAuthDto;

    const userExist = await this.userModel.findOne({ where: { email } });

    if (userExist) {
      throw new ConflictException('user already exists in the system!');
    }

    const hashedPassword = await hashPassword(password);
    // console.log(hashedPassword, 'hashed password generated!');

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

  async loginUser(loginDto: loginAuthDto) {
    const { email, password } = loginDto;
    const userToFind = await this.userModel.findOne({ where: { email } });
    // console.log('user', userToFind);
    if (!userToFind) {
      throw new ConflictException('user doesnot exist in the system');
    }
    const comparePassword = await compareHashPassword(
      password,
      userToFind.password,
    );
    // console.log('compare password result', comparePassword);
    if (!comparePassword) {
      throw new BadRequestException('password is incorrect!');
    }

    const tokens = await this.getTokens(userToFind.id);
    // console.log("tokens", tokens)
    let response = sendResponse(HttpStatus.OK, 'user login successfully', {
      loginUser: userToFind.userName,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
    return response;
  }

  async getTokens(id: any) {
    const payload = { sub: id };

    const accessToken = this.jwt.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_EXPIRY,
    });

    const refreshToken = this.jwt.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRY,
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}
