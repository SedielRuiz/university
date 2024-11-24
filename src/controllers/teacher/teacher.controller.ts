import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TeacherOperation } from '@operation/teacher.operation'
import { ConsultTeacherRequest } from 'src/requests/requesters/teacher.request'
import { teacher, version } from 'src/routers/routes'

@ApiTags('Teachers')
@Controller(version.V1+teacher.BASE_ROUTE)
export class TeacherController {

    constructor(private studentOperation: TeacherOperation) {}

    @Get(teacher.ALL)
    async get(@Query() filters: ConsultTeacherRequest): Promise<Response> {
        return await this.studentOperation.execute(filters)
    }

}
