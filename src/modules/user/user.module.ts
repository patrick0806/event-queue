import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { SendMailConsumer } from '@shared/jobs/sendMailConsumer';
import { SendMailProducerService } from '@shared/jobs/sendMailProducer';
import { CreaterUserController } from './context/createUser/createUser.controller';
import { CreateUserService } from './context/createUser/createUser.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sendMail-queue',
    }),
  ],
  controllers: [CreaterUserController],
  providers: [CreateUserService, SendMailProducerService, SendMailConsumer],
})
export class UserModule {}
