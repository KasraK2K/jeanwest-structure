import { NestApplicationOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/log/app.log';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const nestAppOptions: NestApplicationOptions = {
    logger: logger,
  };
  const app = await NestFactory.create(AppModule, nestAppOptions);
  const configs = app.get(ConfigService);
  const port: number = configs.get('mainPort');

  //? swagger setup
  const Options = new DocumentBuilder()
    .setTitle('JeansWest ERP open api')
    .setDescription('Erp connection open api')
    .setVersion('1.0')
    .addTag('ERP-BRANCH')
    .addTag('ERP-PRODUCT')
    .addTag('ERP-USER')
    .addTag('default')
    .addBearerAuth()
    .build();
  const Document = SwaggerModule.createDocument(app, Options, {});
  SwaggerModule.setup('api', app, Document);

  app.listen(port, () =>
    logger.log(`Application is listening on port : ${port}`),
  );
}
bootstrap();
