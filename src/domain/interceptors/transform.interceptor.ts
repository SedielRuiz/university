import {
        CallHandler,
        ExecutionContext,
        Injectable,
        NestInterceptor,
    } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    statusCode: number;
    status: boolean;
    message?: string;
    data: T;
    metadata?: any;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>>
    {
        intercept( context: ExecutionContext, next: CallHandler<T> ): Observable<Response<T>> {
            return next.handle().pipe(
                map((response: any) => {
                    let { data, message } = response
                    if (!response.data) data = response
                    return {
                        statusCode: context.switchToHttp().getResponse().statusCode,
                        status: true,
                        message: message || '',
                        data
                    }
                })
            )
        }
  }
