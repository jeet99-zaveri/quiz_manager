import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { OptionService } from '../services/option.service';
import { CreateOptionDto } from '../dto/create.option.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt.auth.guard';

@ApiTags('Questions')
@Controller('question/option')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
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
