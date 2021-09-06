import { Controller, Get } from '@nestjs/common';

// This is a decorator that is telling nest
// that we are creating a class that will server a
// a controller inside of our application.  Specifically,
// the class will route incoming requests
@Controller('/app')
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'hi there!';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye there!';
  }
}
