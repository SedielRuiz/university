
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator'

export class LoginRequest {

    @ApiProperty({
        type: String,
        description: 'username',
        example: 'pepito'
    })
    @IsNotEmpty()
    username: string

    @ApiProperty({
        type: String,
        description: 'password',
        example: 'admin123'
    })
    @IsNotEmpty()
    password: string
}