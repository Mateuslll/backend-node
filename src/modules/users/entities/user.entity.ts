import { DefaultEntity } from '@/modules/common/shared/entities/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'users'
})
export class User extends DefaultEntity {
  @Column({
    unique: true
  })
  email: string;

  @Column()
  name: string;

  @Column()
  middle_name: string;

  @Column({ default: true })
  is_active: boolean;
}
