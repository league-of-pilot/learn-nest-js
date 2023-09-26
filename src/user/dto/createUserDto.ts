import { IsEmail, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  // obj User sau khi define lại ko có phone
  // @IsNumberString()
  // phone: string

  @IsString()
  password: string
}
