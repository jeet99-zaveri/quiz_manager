import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { events } from '../../../common/constants/events.constant';
import { ResponseAddEvent } from '../events/response.add.event';

@Controller('/response')
@ApiTags('Response')
export class ResponseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post('')
  async handleQuestionResponse() {
    console.log('IN RESPONSE CONTROLLER :::::::::::::::::::::::::::::: ');

    const payload = new ResponseAddEvent();
    payload.userId = 1;
    payload.optionId = 2;

    this.eventEmitter.emit(events.RESPONSE_SUBMITTED, payload);

    return { message: 'Response taken' };
  }
}
