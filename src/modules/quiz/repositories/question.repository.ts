import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionRepository extends Repository<Question> {
  constructor(private dataSource: DataSource) {
    super(Question, dataSource.createEntityManager());
  }
}
