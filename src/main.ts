import { NestApplicationOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/log/app.log';

async function bootstrap() {
  const nestAppOptions: NestApplicationOptions = {
    logger: logger,
  };
  const app = await NestFactory.create(AppModule, nestAppOptions);
  const configs = app.get(ConfigService);
  const port: number = configs.get('mainPort');
  app.listen(port);
  logger.log(`Application is listening on port : ${port}`);
}
bootstrap();
