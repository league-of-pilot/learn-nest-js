import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/createUserDto'
import { UserService } from './user.service'

@Controller('user')
// api : /user
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): string {
    return 'all users'
  }

  @Get(':id')
  //   ko được trùng method
  //   api : /user/1
  find(@Param('id') id: string) {
    return {
      user: {
        id
      }
    }
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  // https://docs.nestjs.com/controllers
  // https://docs.nestjs.com/custom-decorators
  @Post()
  create(@Body('name') nameRepresent: string) {
    return `the text is ${nameRepresent}`
  }

  @Post('any')
  createAny(@Body() dummyName: any) {
    return dummyName
  }

  @Post('create')
  createDto(@Body() userDto: CreateUserDto) {
    // nếu chỉ viết thuần thì không có validate
    return userDto
  }
}
