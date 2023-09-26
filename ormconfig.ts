import { User } from 'src/entities/user.entity'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User],
  //   this should be set to false in production, prevent continuous migration
  synchronize: true
}

export default config
