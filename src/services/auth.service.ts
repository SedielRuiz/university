import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtService } from '@nestjs/jwt'
import { LoginRequest } from 'src/requests/requesters/auth.request'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async login(data: LoginRequest): Promise<any> {
        const user = await this.usersService.findOne(data.username)
        if (user?.password !== data.password) {
            throw new UnauthorizedException('Invalid credential')
        }
        const payload = { userId: user.userId, username: user.username }

        return await this.jwtService.signAsync(payload)
    }
}