import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CreateUserDto } from './dto/createUserDto'
import { UserService } from './user.service'
import { CommentService } from 'src/comment/comment.service'
import { UpdateUserDto } from './dto/updateUserDto'

@Controller('user')
// api : /user
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService
  ) {}

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

  @Get(':id/comments')
  findUserComments(@Param('id') id: string) {
    return this.commentService.findUserComments(id)
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

  @Post('createByService')
  createByService(@Body() userDto: CreateUserDto) {
    // Nếu validation fail thì ko chạy vô đoạn controller này luôn
    console.count('🚀🚀 pre create by service')
    return this.userService.create(userDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // tuy nhiên đang có lỗ hổng là update được cả password
    // password khi update lại không được hash lại
    return this.userService.update(id, updateUserDto)
  }
}
