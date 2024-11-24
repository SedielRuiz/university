import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly jwtService: JwtService) {}

    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1]
        if (token) {
            try {
                this.jwtService.verify(token)
                next()
            } catch (e) {
                throw new UnauthorizedException('Invalid token')
            }
        }else{
            throw new UnauthorizedException('No token')
        }
    }
}
