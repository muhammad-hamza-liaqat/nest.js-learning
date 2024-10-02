import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest.js APIs')
    .setDescription('The NestJS API collection')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))

  const port = process.env.PORT;
  await app.listen(port);

  console.log(`Server is running on http://localhost:${port}/`);
  console.log(
    `Swagger API documentation available at: http://localhost:${port}/api`,
  );
}

bootstrap().catch((error) => {
  console.error('Error starting the server:', error);
});
