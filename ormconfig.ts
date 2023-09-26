import { Comment } from 'src/entities/comment.entities'
import { Topic } from 'src/entities/topic.entities'
import { User } from 'src/entities/user.entity'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  //   this should be set to false in production, prevent continuous migration
  synchronize: true
}

export default config
