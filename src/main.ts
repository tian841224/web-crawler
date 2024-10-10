import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 //Swagger設定
 const config = new DocumentBuilder()
  .setTitle('Nest.js 爬蟲練習')
  .setDescription('學習使用Nest.js寫爬蟲')
  .setVersion('1.0')
  .build();

 const document = SwaggerModule.createDocument(app,config);
 SwaggerModule.setup('api',app,document);

  await app.listen(3000);
}
bootstrap();
