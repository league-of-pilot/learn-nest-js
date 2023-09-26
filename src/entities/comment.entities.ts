import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'
import { Topic } from './topic.entities'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  // @ManyToOne((type) => User, (user) => user.id)
  // Có thể viết theo cách trên
  // ko nhất thiết phải define relation ở cả 2 bên
  // Tuy nhiên muốn user access comment thì phải define relation ở cả 2 bên
  @ManyToOne((type) => User, (user) => user.comments)
  user: User

  @ManyToOne((type) => Topic, (topic) => topic.comments)
  topic: Topic
}
