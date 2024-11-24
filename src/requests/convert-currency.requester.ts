import { Injectable } from '@nestjs/common'
import { BaseRequest } from './base-request'
import { HttpMethods } from 'src/constants/http-methods'

@Injectable()
export class ConvertCurrencyRequester extends BaseRequest<any> {
    getBody = (_: any): any => _

    getHeaders = (): object => ({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })

    setBody = (body: any) => ({})

    setHeaders(headers: any) { }

    setPath(args: any) { }

    getPath = () => ''

    getMethod = () => HttpMethods.GET

    detailable = true

    getNameEvent = () => 'CONVERT_CURRENCY'

    handlerResponse = (response: any) => response
}
    