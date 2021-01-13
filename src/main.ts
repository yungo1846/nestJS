import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // user가 입력한 인풋(url 파라미터)을 함수에서 지정해놓은 원하는 타입으로 변환 가능하도록
    }),
  );
  await app.listen(3000);
}
bootstrap();
