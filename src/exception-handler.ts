import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'
import { HttpException, HttpStatus } from '@nestjs/common'

export const getStatusCode = (exception: unknown): number => {
    return exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
}

export const getErrorMessage = (exception: unknown): string => {
    return String(exception);
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const statusCode = getStatusCode(exception)
        const message = getErrorMessage(exception)
        const responseException = statusCode < HttpStatus.INTERNAL_SERVER_ERROR ? exception.getResponse().message : message
        const body: any = {
            statusCode,
            status: false,
            message: responseException
        }

        response.status(statusCode).json(body)
    }
}