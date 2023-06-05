import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [QuizModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
