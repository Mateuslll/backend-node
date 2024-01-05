import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { CreateUserService } from '../services/create-user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  private readonly createUser: CreateUserService;

  public constructor(
    createUser: CreateUserService
  ) {
    this.createUser = createUser;
  }


  @Post()
  @HttpCode(201)
  public async create(@Body() data: CreateUserDTO) {
    try {
      await this.createUser.createUser(data);
      return;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
