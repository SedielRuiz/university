import { Module } from '@nestjs/common'
import { UserModule } from './users.module'
import { AuthService } from 'src/services/auth.service'
import { AuthController } from 'src/controllers/auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/constants/auth'

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
