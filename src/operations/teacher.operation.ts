import { Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { ConsultTeacherRequest } from 'src/requests/requesters/teacher.request'
import { TeacherService } from '@service/teacher.service'
import { Teachers } from 'src/domain/entities/teachers.entity'
import { Courses } from 'src/domain/entities/courses.entity'
import { student } from 'src/routers/routes'

@Injectable()
export class TeacherOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(TeacherOperation.name)
    constructor(
        private teacherService: TeacherService
    ) {}

    async execute(filters: ConsultTeacherRequest): Promise<any> {
        const teachers: Teachers[] =  await this.teacherService.all(filters)
        const response = teachers.map(({ id, name, coursesOffered, teacherCourses }) => ({
            id,
            name,
            coursesOffered,
            courses: teacherCourses.map(({ course, studentTeacherCourses }) => ({
                name: course.name,
                description: course.description,
                credits: course.credits,
                students: studentTeacherCourses.map(({ student }) => ({
                    name: student.name,
                    lastname: student.lastname,
                    email: student.email,
                    phone: student.phone
                }))
            }))
        }))

        return response
    }
}