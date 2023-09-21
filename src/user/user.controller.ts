import { Controller, Get, Param, Post } from '@nestjs/common'

@Controller('user')
// api : /user
export class UserController {
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

  @Post()
  create() {
    return 'create user'
  }
}
