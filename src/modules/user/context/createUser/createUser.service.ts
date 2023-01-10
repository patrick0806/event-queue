import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailProducerService } from '@shared/jobs/sendMailProducer';
import { CreateUserRequestDTO } from './dtos/request.dto';

@Injectable()
export class CreateUserService {
  constructor(private sendMailProducerService: SendMailProducerService) {}
  async execute(user: CreateUserRequestDTO) {
    this.sendMailProducerService.sendMail(user);
    return user;
  }
}
