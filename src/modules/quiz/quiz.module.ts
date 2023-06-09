import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './services/quiz.service';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { Option } from './entities/option.entity';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
import { OptionRepository } from './repositories/option.repository';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option]), UserModule],
  providers: [
    QuizService,
    QuizRepository,
    QuestionService,
    QuestionRepository,
    OptionService,
    OptionRepository,
  ],
})
export class QuizModule {}
