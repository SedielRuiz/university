import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class ConsultStudentRequest {

    @ApiProperty({
        type: Number,
        description: 'student id',
        example: '1'
    })
    @IsOptional()
    id: number

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito Perez'
    })
    @IsOptional()
    name: string

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string

}

export class CreateStudentRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string

    @ApiProperty({
        type: Number,
        description: 'document',
        example: 123456789
    })
    @IsNotEmpty()
    document: number

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsNotEmpty()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsNotEmpty()
    address: string

    @ApiProperty({
        type: Date,
        description: 'birthDate',
        example: '2024-03-31T00:00:00.000Z'
    })
    @IsOptional()
    birthDate: Date
}

export class UpdateStudentRequest {

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Pepito'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        description: 'lastname',
        example: 'Perez'
    })
    @IsNotEmpty()
    lastname: string

    @ApiProperty({
        type: Number,
        description: 'document',
        example: 123456789
    })
    @IsNotEmpty()
    document: number

    @ApiProperty({
        type: String,
        description: 'email',
        example: 'pepito@example.com'
    })
    @IsOptional()
    email: string

    @ApiProperty({
        type: String,
        description: 'phone',
        example: '+1234567890'
    })
    @IsOptional()
    phone: string

    @ApiProperty({
        type: String,
        description: 'address',
        example: '123 Main St, City, Country'
    })
    @IsOptional()
    address: string

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: true
    })
    @IsOptional()
    status: boolean

    @ApiProperty({
        type: Date,
        description: 'birthDate',
        example: '2024-03-31T00:00:00.000Z'
    })
    @IsOptional()
    birthDate: Date
}

export class RegistrationCourseRequest {

    @ApiProperty({
        type: Number,
        description: 'courseId',
        example: '1'
    })
    @IsNotEmpty()
    courseId: number
}
