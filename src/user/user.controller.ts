import { Controller, Get } from '@nestjs/common'

@Controller('user')
// api : /user
export class UserController {
  @Get()
  findAll(): string {
    return 'all users'
  }

  @Get('1')
  //   ko được trùng method
  //   api : /user/1
  find(): string {
    return 'user 1'
  }
}
