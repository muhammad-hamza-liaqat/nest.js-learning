import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entities/auth.entity';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "muhammad_hamza",
      password: "lahore54000",
      database: "nestjs",
      entities: [Auth],
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],  // Glob pattern to load all entity files
      synchronize: true,
      autoLoadEntities: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
