import { Injectable } from '@nestjs/common';
import { QuestionRepository } from '../repositories/question.repository';
import { CreateQuestionDto } from '../dto/create.question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(private readonly questionRepository: QuestionRepository) {}

  async getQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: ['quiz', 'options'],
    });
  }

  async createNewQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions.unshift(newQuestion);
    await quiz.save();

    return newQuestion;
  }
}
