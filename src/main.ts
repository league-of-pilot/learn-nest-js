import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      // This will trim extra field in dto and only allow field in dto
      whitelist: true,
      // This will forbid extra field in dto in client payload
      forbidNonWhitelisted: true
    })
  )
  await app.listen(6000)
}
bootstrap()
