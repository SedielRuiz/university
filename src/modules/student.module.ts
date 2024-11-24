import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentOperation } from '@operation/student.operation'
import { StudentRepository } from '@repository/student.repository'
import { StudentService } from '@service/student.service'
import { StudentController } from 'src/controllers/student/student.controller'
import { Students } from 'src/domain/entities/students.entity'
import { CourseModule } from './course.module'
import { TeacherCourseModule } from './teacher-course.module'
import { StudentTeacherCourses } from 'src/domain/entities/student-teacher-courses.entity'
import { ConvertCurrencyRequester } from 'src/requests/convert-currency.requester'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Students,
            StudentTeacherCourses
        ]),
        CourseModule,
        TeacherCourseModule
    ],
    controllers: [StudentController],
    providers: [
        StudentOperation,
        StudentService,
        StudentRepository,
        ConvertCurrencyRequester
    ],
    exports: [TypeOrmModule, StudentService]
})
export class StudentModule {}
