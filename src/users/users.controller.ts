import { Controller, Get } from '@nestjs/common';

// command to generate the controller is nest g controller --controller_name
// nest g controller users
// it will automatically update the app.controller.ts & app.module.ts


@Controller('api/users')
export class UsersController {
    @Get()
    userInformation(): string{
        return "Hello User!"
    }

    @Get("my-information/:id")
    userById(): object{
        return { _id: "101DA", name:"Muhammad Hamza Liaqat"}
    }
}
