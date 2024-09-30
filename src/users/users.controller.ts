import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';

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
  @Redirect('https://google.com/')
  getMyInformation(@Param() record: any): any {
    console.log('incoming params', record);
    // return 'hello from params route!'+ record.id;
    return 'hello from params route!';
  }

  //   this route will redirect to nestjs, if there version and is equal to 5, it will be redirected to version v5
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
