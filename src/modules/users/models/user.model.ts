import { DefaultModel } from '@/modules/common/shared/models';

export type UserModel = DefaultModel &{
  name: string
  email: string
  middle_name: string
  is_active: boolean
}
