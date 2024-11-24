import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class ConsultTeacherRequest {

    @ApiProperty({
        type: Number,
        description: 'teacher id',
        example: '1'
    })
    @IsOptional()
    id: number

    @ApiProperty({
        type: String,
        description: 'name',
        example: 'Mathematics'
    })
    @IsOptional()
    name: string

    @ApiProperty({
        type: Boolean,
        description: 'status',
        example: 'true'
    })
    @IsOptional()
    status: boolean
}
