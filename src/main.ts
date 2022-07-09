import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { Config } from './config/config';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.use(cors());

  app.setGlobalPrefix('/api');

  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );

  await app.listen(Config.port);
}
bootstrap();
