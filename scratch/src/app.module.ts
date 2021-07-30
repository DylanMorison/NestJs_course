import { Controller, Module, Get } from '@nestjs/common';
import { AppController } from './app.controller';

// Whenever our application starts up nest is going to look
// at AppModule, find all controllers listed below, and automatically create
// an instance of all our controller classes.  This means nest will create an instance
// of AppController for us.
@Module({
    controllers: [AppController],
})
export class AppModule {}
