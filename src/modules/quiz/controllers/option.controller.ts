import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { OptionService } from '../services/option.service';
import { CreateOptionDto } from '../dto/create.option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );

    const option = await this.optionService.createNewOption(
      createOption,
      question,
    );
    return { createOption, question, option };
  }
}
