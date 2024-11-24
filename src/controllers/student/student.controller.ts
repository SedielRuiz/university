import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { StudentOperation } from '@operation/student.operation'
import { ConsultStudentRequest, CreateStudentRequest, RegistrationCourseRequest, UpdateStudentRequest } from 'src/requests/requesters/student.request'
import { student, version } from 'src/routers/routes'

@ApiTags('Students')
@Controller(version.V1+student.BASE_ROUTE)
export class StudentController {

    constructor(private studentOperation: StudentOperation) {}

    @Get(student.ALL)
    async get(@Query() filters: ConsultStudentRequest): Promise<Response> {
        return await this.studentOperation.execute(filters)
    }

    @Get(student.DETAIL)
    async detail(@Param() params): Promise<Response> {
        return await this.studentOperation.detail(params)
    }

    @Post(student.CREATE)
    async create(@Body() request: CreateStudentRequest): Promise<Response> {
        return await this.studentOperation.create(request)
    }

    @Put(student.UPDATE)
    async update(@Param() params, @Body() request: UpdateStudentRequest): Promise<Response> {
        return await this.studentOperation.update(params, request)
    }

    @Delete(student.DELETE)
    async delete(@Param() params): Promise<Response> {
        return await this.studentOperation.delete(params)
    }

    @Post(student.REGISTRATION_COURSE)
    async registrationCourse(@Param() params, @Body() request: RegistrationCourseRequest): Promise<Response> {
        return await this.studentOperation.registrationCourse(params, request)
    }

}
