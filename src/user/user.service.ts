import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/createUserDto'
import { UpdateUserDto } from './dto/updateUserDto'

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
  createDummy(userDto: CreateUserDto) {
    console.count('🚀🚀 inside create by service')
    return userDto
  }

  async findOne(id: string) {
    return await this.userRepo.findOne({ where: { id: id } })
  }

  async create(userDto: CreateUserDto) {
    const user = this.userRepo.create(userDto)
    // Bước create này vẫn chưa insert vào, nếu log ở đây sẽ thấy dc raw password
    // id lúc này cũng chưa được generate
    // console.log('🚀 user.service L33-user', user, user.id, typeof user.id)
    const savedUser = await this.userRepo.save(user)
    console.log(
      '🚀 user.service L37-savedUser',
      savedUser,
      savedUser.id,
      typeof savedUser.id // log sẽ ra number dù đang ép trong code BE là string!!!
    )
    return savedUser
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto)
  }
}
