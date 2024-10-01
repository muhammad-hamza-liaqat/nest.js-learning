import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';

@Module({
  imports: [
    // for env variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DB connection
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
