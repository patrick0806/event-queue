import { CreateUserRequestDTO } from '@modules/user/context/createUser/dtos/request.dto';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}
  async sendMail(user: CreateUserRequestDTO) {
    await this.queue.add('sendMail-job', user);
  }
}
