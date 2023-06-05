import { Injectable } from '@nestjs/common';
import { OptionRepository } from '../repositories/option.repository';
import { CreateOptionDto } from '../dto/create.option.dto';
import { Question } from '../entities/question.entity';
import { Option } from '../entities/option.entity';
import { QuestionRepository } from '../repositories/question.repository';

@Injectable()
export class OptionService {
  constructor(
    private readonly optionRepository: OptionRepository,
    private readonly questionRepository: QuestionRepository,
  ) {}

  async createNewOption(
    option: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options.push(newOption);
    await question.save();

    return newOption;
  }
}
