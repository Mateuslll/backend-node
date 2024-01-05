import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async existsByEmail(email: string): Promise<boolean> {
    const user = await this.findOne({
      where: {
        email
      }
    });

    return !!user;
  }
}
