import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseOperation } from '@operation/course.operation';
import { ConsultCourseRequest } from 'src/requests/requesters/course.request';
import { course, version } from 'src/routers/routes';

@ApiTags('Courses')
@Controller(version.V1+course.BASE_ROUTE)
export class CourseController {

    constructor(private courseOperation: CourseOperation) {}

    @Get(course.ALL)
    async get(@Query() filters: ConsultCourseRequest): Promise<Response> {
        return await this.courseOperation.execute(filters)
    }

}
