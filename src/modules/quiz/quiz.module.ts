import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './services/quiz.service';
import { QuizProcessor } from './processor/quiz.processor';
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
import { ResponseController } from './controllers/response.controller';
import { ResponseService } from './services/response.service';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [
    QuizController,
    QuestionController,
    OptionController,
    ResponseController,
  ],
  imports: [
    TypeOrmModule.forFeature([Quiz, Question, Option]),
    UserModule,
    BullModule.registerQueue({ name: 'quiz' }),
  ],
  providers: [
    QuizService,
    QuizRepository,
    QuizProcessor,
    QuestionService,
    QuestionRepository,
    OptionService,
    OptionRepository,
    ResponseService,
  ],
})
export class QuizModule {}
