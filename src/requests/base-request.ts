import { HttpMethods } from '../constants/http-methods'
import { Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'

export abstract class BaseRequest<T> {

    private httpService = null
    protected path = ''
    protected body = {}
    protected headers = {}
    private readonly logger = new Logger(BaseRequest.name)

    constructor(
    ) {
        this.httpService = new HttpService()
    }

    abstract getBody(requesterEntity: any) : any

    abstract getHeaders() : object

    abstract getPath() : string

    abstract setPath(args: any) : any

    abstract getMethod() : string

    getNameEvent = () => null

    handlerResponse = (response: any) => null

    async run(requesterEntity: any, path : string = '', headersRequest: any = {}): Promise<T> {
        const body = this.getBody(requesterEntity)
        const method = this.getMethod()
        const headers = {...this.getHeaders(), ...headersRequest}
        const baseUrl = `${path}${this.getPath()}`
        let req = null
		this.logger.verbose(`RUN_REQUESTER_[Method: ${method} Url: ${baseUrl} Body: ${JSON.stringify(body)} Headers: ${JSON.stringify(headers)}]`)

		switch (method) {
            case HttpMethods.POST:

              req = this.httpService.post(baseUrl, body, { headers: headers })
              break
            case HttpMethods.PUT:

            req = this.httpService.put(baseUrl, body, { headers: headers })
            break
            case HttpMethods.GET:
			  const urlParams = new URLSearchParams(body)
              const concatParams = (urlParams.toString().length > 0) ? `?${urlParams.toString()}` : ''
              const url = `${baseUrl}${concatParams}`
              this.logger.verbose(`RUN_REQUESTER_[Method: ${method} Url: ${url} Headers: ${JSON.stringify(headers)}`)
              req = this.httpService.get(url, { headers: headers })

            break
        }

		const response = await req.toPromise()

		return response.data
    }
}
