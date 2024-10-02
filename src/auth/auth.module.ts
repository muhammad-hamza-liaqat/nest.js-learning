import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, authSchema } from './entities/auth.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forFeature([{name: Auth.name, schema: authSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
