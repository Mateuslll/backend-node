import { Injectable } from '@nestjs/common';
import { UserRepository } from './../repositories/user.repository';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class CreateUserService {
  public constructor(private readonly userRepository: UserRepository) {  }

  public async createUser(request: CreateUserDTO): Promise<User> {
    try {
      const userAlreadyExists = await this.userRepository.existsByEmail(
        request.email
      );

      if (userAlreadyExists) {
        throw new Error(
          'O e-mail enviado já está cadastrado na base de dados.'
        );
      }
      return await this.userRepository.create(request);
    } catch (e) {
      throw new Error(e);
    }
  }
}
