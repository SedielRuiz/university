import { Injectable, Logger } from '@nestjs/common'
import { CourseRepository } from '@repository/course.repository';
import { Courses } from 'src/domain/entities/courses.entity';
import { ConsultCourseRequest } from 'src/requests/requesters/course.request';

@Injectable()
export class CourseService {
    private readonly logger = new Logger(CourseService.name);

    constructor(private courseRepository: CourseRepository) {}

    async all (filter: Partial<ConsultCourseRequest>): Promise<Courses[]> {
        return await this.courseRepository.all(filter)
    }

    async findOne(filter: Partial<ConsultCourseRequest>): Promise<Courses> {
        return await this.courseRepository.findOne(filter)
    }
}
