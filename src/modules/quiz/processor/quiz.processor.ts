import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('quiz')
export class QuizProcessor {
  @Process()
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 5; i++) {
      console.log('JOB DATA :::::::::::::::::::::::: ', job.data);
      progress += 1;
      await job.progress(progress);
    }
    return {};
  }
}
