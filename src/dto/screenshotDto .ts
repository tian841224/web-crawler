import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsNotEmpty } from 'class-validator';

export class ScreenshotDto {
    @ApiProperty({
      description: '要截圖的網址',
      example: 'https://ithelp.ithome.com.tw/articles/10239654',
    })
    @IsUrl()
    @IsNotEmpty()
    url: string;
  }