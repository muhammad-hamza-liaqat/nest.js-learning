import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { User, userSchema } from './entity/user.schema';

@Module({
  imports: [

    // for env variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DB connection
    MongooseModule.forFeature([{name: User.name, schema: userSchema}]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
