import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginRequest } from 'src/requests/requesters/auth.request'
import { auth, version } from 'src/routers/routes'
import { AuthService } from 'src/services/auth.service'

@ApiTags('Auth')
@Controller(version.V1+auth.BASE_ROUTE)
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post(auth.LOGIN)
    login(@Body() request: LoginRequest) {
        return this.authService.login(request)
    }
}