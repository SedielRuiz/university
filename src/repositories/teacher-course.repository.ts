import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TeacherCourses } from 'src/domain/entities/teacher-courses.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TeacherCourseRepository {

    constructor(
        @InjectRepository(TeacherCourses)
        private teacherCourseRepository: Repository<TeacherCourses>,
    ) {}

    async findOne (filter: object): Promise<TeacherCourses> {
        const teacherCourse: TeacherCourses = await this.teacherCourseRepository.findOne({
            where: filter,
            relations: ['teacher', 'course']
        })

        if (!teacherCourse)
            throw new NotFoundException(`Teacher with course with [filter: ${JSON.stringify(filter)}] not found`)

        return teacherCourse
    }

    async save (teacherCourse: Partial<TeacherCourses>): Promise<TeacherCourses> {
        return await this.teacherCourseRepository.save(teacherCourse)
    }

}
