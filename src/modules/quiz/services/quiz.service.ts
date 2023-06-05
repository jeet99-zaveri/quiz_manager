import { Injectable } from '@nestjs/common';
import { QuizRepository } from '../repositories/quiz.repository';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
