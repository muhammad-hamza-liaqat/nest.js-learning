import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap () {
  dotenv.config()
  const app = await NestFactory.create(AppModule)
  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Apis Collections')
    .setDescription('the list of api(s)')
    .setVersion('1.0')
    .addTag('nest.js')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  // server
  await app.listen(process.env.PORT)
}
bootstrap()
