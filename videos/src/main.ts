import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import {http-server} from 'http-server';
import * as httpserver from 'http-server';
import * as cookieParser from 'cookie-parser';
//console.log(httpserver);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
