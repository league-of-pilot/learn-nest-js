import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './createUserDto'

// https://docs.nestjs.com/techniques/validation#mapped-types
// Cẩn thận không khuyến khích sử dụng thư viện này
// Ngay trong docs cũng ghi
export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string
  email: string
  password: string
}
