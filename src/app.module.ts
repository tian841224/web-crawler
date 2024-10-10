import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScreenshotController } from './screenshot/screenshot.controller';
import { ScreenshotService } from './screenshot/screenshot.service';
import { ScreenshotModule } from './screenshot/screenshot.module';

@Module({
  imports: [ScreenshotModule],
  controllers: [AppController, ScreenshotController],
  providers: [AppService, ScreenshotService],
})
export class AppModule {}
