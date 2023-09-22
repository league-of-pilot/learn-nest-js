import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      id: id,
      message: 'localhost:{PORT}/user/find/:id'
    }
  }
}
