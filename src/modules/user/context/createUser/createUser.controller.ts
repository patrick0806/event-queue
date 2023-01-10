import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDTO } from './dtos/request.dto';

@Controller('/users')
export class CreaterUserController {
  @Post()
  async handler(@Body() user: CreateUserRequestDTO) {
    return {
      message: user,
    };
  }
}
