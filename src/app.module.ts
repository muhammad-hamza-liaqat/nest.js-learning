import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entities/auth.entity';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/db.config';

// console.log(`DB_HOST: ${process.env.DB_HOST}`);
// console.log(`DB_USER_NAME: ${process.env.DB_USER_NAME}`);
// console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
// console.log(`DB_NAME: ${process.env.DB_NAME}`);

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot( typeOrmConfig), // db config
    ConfigModule.forRoot({ isGlobal: true }), // env global config
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
