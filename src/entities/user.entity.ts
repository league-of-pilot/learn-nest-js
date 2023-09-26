import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Comment } from './comment.entities'

@Entity()
// có thể truyền tên của table trong postgresql vào Entity
// nhưng bỏ trống ko sao
export class User {
  @PrimaryGeneratedColumn()
  // Dù ép kiểu là string nhưng qua decorator trên lại trả về number
  id: string

  // Do thuộc tính unique nên sẽ ko thể tạo được name hoặc email đã có sẵn
  @Column({ unique: true, nullable: false })
  name: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column({ nullable: false })
  password: string

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}
