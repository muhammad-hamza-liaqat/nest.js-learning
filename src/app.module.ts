import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    // for env variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // DB connection
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
