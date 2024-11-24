import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeacherCourseRepository } from '@repository/teacher-course.repository'
import { TeacherCourseService } from '@service/teacher-course.service'
import { TeacherCourses } from 'src/domain/entities/teacher-courses.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TeacherCourses
        ]),
    ],
    controllers: [],
    providers: [
        TeacherCourseService,
        TeacherCourseRepository
    ],
    exports: [TypeOrmModule, TeacherCourseService]
})
export class TeacherCourseModule {}
