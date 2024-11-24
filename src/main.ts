import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { GlobalExceptionFilter } from './exception-handler'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as dotenv from 'dotenv'

async function bootstrap() {
    dotenv.config()
    const logger = new Logger('bootstrap')
    const port = process.env.port
    logger.log(`Application Listening on Port: ${port}`)
    const app = await NestFactory.create(AppModule)
    app.useGlobalFilters(new GlobalExceptionFilter())
    app.useGlobalPipes(new ValidationPipe())
    app.enableCors()

    const swagger = new DocumentBuilder()
        .setTitle('API UNIVERSITY')
        .setDescription('API UNIVERSITY')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, swagger)
    SwaggerModule.setup('doc', app, document)

	await app.listen(port)
}
bootstrap()
