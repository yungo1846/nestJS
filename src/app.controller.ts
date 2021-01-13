import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    console.log('eh');
    return 'Welcome to my Movie API';
  }
}
