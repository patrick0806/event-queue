import { CreateUserRequestDTO } from '@modules/user/context/createUser/dtos/request.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('sendMail-queue')
export class SendMailConsumer {
  constructor(private mailService: MailerService) {}
  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserRequestDTO>) {
    const { data } = job;

    await this.mailService.sendMail({
      to: data.email,
      from: 'Patrick Nicezi <patricknicezi@test.com.br>',
      subject: 'Welcome',
      text: `Hello ${data.name}, your registration has been carried out successfully welcome`,
    });
  }
}
