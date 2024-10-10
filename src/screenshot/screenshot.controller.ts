import { Body, Controller, Post, Res } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ScreenshotDto } from 'src/dto/screenshotDto ';

@ApiTags('screenshot')
@ApiResponse({ status: 200, description: 'Returns a screenshot as a PNG image.' })
@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Post()
  async takeScreenShot(@Body() dto: ScreenshotDto, @Res() res: Response) {
    try {
      const screenshot = await this.screenshotService.captureWebpage(dto.url);
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Length', screenshot.length.toString());
      res.send(screenshot);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }
}
