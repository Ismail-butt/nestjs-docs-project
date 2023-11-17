import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 5000;

  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
  console.log(`App is Listening at Port ${PORT}`);
}
bootstrap();
