import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // This adds the prefix 'api' before the routes of the application by default, i.e: api/pokemon/1
  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
      transformOptions:{
         enableImplicitConversion: true,
      }
    })
  );
  
  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`)
}
bootstrap();
