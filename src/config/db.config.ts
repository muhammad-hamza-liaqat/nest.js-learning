import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entities/auth.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Auth],
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],  // Glob pattern to load all entity files
  synchronize: true,
  autoLoadEntities: true,
};
