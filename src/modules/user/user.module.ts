import { Module } from '@nestjs/common';
import { CreaterUserController } from './context/createUser/createUser.controller';
import { CreateUserService } from './context/createUser/createUser.service';

@Module({
  imports: [],
  controllers: [CreaterUserController],
  providers: [CreateUserService],
})
export class UserModule {}
