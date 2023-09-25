import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
// có thể truyền tên của table trong postgresql vào Entity
// nhưng bỏ trống ko sao
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true, nullable: false })
  name: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column({ nullable: false })
  password: string
}
