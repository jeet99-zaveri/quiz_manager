import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  @Cron('*/30 * * * * *')
  handleCron() {
    this.logger.debug('This cron is called on every 30 seconds.');
  }
}
