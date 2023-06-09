import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @ApiProperty({ description: 'Primary key as Quiz ID', example: 1 })
  @PrimaryGeneratedColumn({ comment: 'The quiz unique identifier' })
  id: number;

  @ApiProperty({
    description: 'Title of the quiz',
    example: 'Sample nest quiz',
  })
  @Column({ type: 'varchar' })
  title: string;

  @ApiProperty({
    description: 'Description of the quiz',
    example: 'Lorem ipsum',
  })
  @Column({ type: 'varchar' })
  description: string;

  @ApiProperty({ description: 'Quiz active or inactive state', example: true })
  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @ApiProperty({ description: 'List of questions' })
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
