import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Courses } from 'src/domain/entities/courses.entity'
import { ConsultCourseRequest } from 'src/requests/requesters/course.request'
import { Repository } from 'typeorm'

@Injectable()
export class CourseRepository {

    constructor(
        @InjectRepository(Courses)
        private courseRepository: Repository<Courses>,
    ) {}

    async all (filter: Partial<ConsultCourseRequest>): Promise<Courses[]> {
        const courses: Courses[] = await this.courseRepository.find({
            where: filter,
            relations: ['teachers']
        })

        return courses
    }

    async findOne (filter: Partial<ConsultCourseRequest>): Promise<Courses> {
        const course: Courses = await this.courseRepository.findOne({
            where: filter,
            relations: ['teachers']
        })

        if (!course)
            throw new NotFoundException(`Course with [filter: ${JSON.stringify(filter)}] not found`)

        return course
    }

}
