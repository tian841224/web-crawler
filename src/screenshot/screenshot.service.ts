import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()

export class ScreenshotService {
    async captureWebpage(url : string): Promise<Buffer>{
        const brower = await puppeteer.launch({
            headless : true,
            args:['--no-sandbox','--disable-setud-sandbox'],
        });

        try{
            const page = await brower.newPage();
            await page.setViewport({width : 1920,height :1080});
            await page.goto(url,{waitUntil: ['domcontentloaded','load']});
            
            const screenshot = await page.screenshot({
                fullPage : true,
                type: 'png',
            });
            
            return Buffer.from(screenshot);
        }finally{
            await brower.close();
        }
    }
}
