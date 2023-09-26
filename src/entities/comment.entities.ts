import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Topic } from './topic.entities'
import { User } from './user.entity'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  user: User

  topic: Topic
}
