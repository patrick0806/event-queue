import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './createUser.service';
import { CreateUserRequestDTO } from './dtos/request.dto';

@Controller('/users')
export class CreaterUserController {
  constructor(private createUserService: CreateUserService) {}
  @Post()
  async handler(@Body() user: CreateUserRequestDTO) {
    return this.createUserService.execute(user);
  }
}
