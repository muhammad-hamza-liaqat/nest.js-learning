import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { GlobalExceptionFilter } from './helpers/tryCatch.helper';

async function server() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new GlobalExceptionFilter())
  await app.listen(process.env.PORT);
}
server();
