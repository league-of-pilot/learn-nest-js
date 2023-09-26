import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comment } from './comment.entities'

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @OneToMany((type) => Comment, (comment) => comment.topic)
  comments: Comment[]
}
