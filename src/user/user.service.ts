import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/createUserDto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}

  findOneDummy(id: string) {
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

  async findOne(id: string) {
    return await this.userRepo.findOne({ where: { id: id } })
  }
}
