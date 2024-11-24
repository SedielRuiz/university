import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { CourseService } from '@service/course.service'
import { ConsultCourseRequest } from 'src/requests/requesters/course.request'
@Injectable()
export class CourseOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(CourseOperation.name)
    constructor(
        private courseService: CourseService
    ) {}

    async execute(filters: ConsultCourseRequest): Promise<any> {
        return await this.courseService.all(filters)
    }
}