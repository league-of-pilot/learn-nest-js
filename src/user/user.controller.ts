import { Body, Controller, Get, Param, Post } from '@nestjs/common'

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
}
