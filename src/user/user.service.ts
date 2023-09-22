import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/createUserDto'

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id: id,
      message: 'localhost:{PORT}/user/find/:id'
    }
  }

  // validate sẽ chặn vào service
  // how to log validator request validtor bị chặn ?
  create(userDto: CreateUserDto) {
    console.count('🚀🚀 inside create by service')
    return userDto
  }
}
