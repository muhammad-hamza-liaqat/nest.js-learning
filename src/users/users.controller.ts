import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

// command to generate the controller is nest g controller --controller_name
// nest g controller users
// it will automatically update the app.controller.ts & app.module.ts

@Controller('api/users')
export class UsersController {
  @Get()
  userInformation(): string {
    return 'Hello User!';
  }

  @Post('add-user')
  @HttpCode(201)
  userById(@Body() record: any): object {
    console.log('body', record);
    return { _id: '101DA', name: 'Muhammad Hamza Liaqat' };
  }

  @Get('my-profile/:id')
  async getMyInformation(@Param() params: any) {
    console.log('incoming params', params);
    // return 'hello from params route!'+ params.id;
    return 'hello from params route!' + params.id;
  }

  // this route will redirect to nestjs, if there version and is equal to 5, it will be redirected to version v5
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post('user-additional')
  userAdditionalInformation(@Req() req: Request, @Res() res: Response) {
    const { name, address, phone } = req.body;
    console.log('req.body', req.body);
    res
      .status(HttpStatus.CREATED)
      .json({ message: 'user additional information added successfully!' });
  }

  @Get('videos/:id')
  getVideo(@Param() params: any, @Res() res: Response) {
    console.log(`${params.id} from route extracted!`);
    return res
      .status(HttpStatus.FOUND)
      .json({ message: `${params.id} from routes!` });
  }
}
