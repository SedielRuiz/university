import { Injectable, Logger } from '@nestjs/common'
import { TeacherCourseRepository } from '@repository/teacher-course.repository'
import { TeacherCourses } from 'src/domain/entities/teacher-courses.entity'
import { ConsultCourseRequest } from 'src/requests/requesters/course.request'

@Injectable()
export class TeacherCourseService {
    private readonly logger = new Logger(TeacherCourseService.name)

    constructor(private teacherCourseRepository: TeacherCourseRepository) {}

    async findOne(filter: object): Promise<TeacherCourses> {
        return await this.teacherCourseRepository.findOne(filter)
    }

    async create(teacherCourse: TeacherCourses): Promise<TeacherCourses> {
        return await this.teacherCourseRepository.save(teacherCourse)
    }
}
