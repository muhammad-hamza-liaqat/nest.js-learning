import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/db.config';
import { UploadModule } from './modules/upload/upload.module';


// console.log(`DB_HOST: ${process.env.DB_HOST}`);
// console.log(`DB_USER_NAME: ${process.env.DB_USER_NAME}`);
// console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
// console.log(`DB_NAME: ${process.env.DB_NAME}`);

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
