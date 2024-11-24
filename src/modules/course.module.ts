import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Courses } from 'src/domain/entities/courses.entity'
import { CourseController } from 'src/controllers/course/course.controller'
import { CourseOperation } from '@operation/course.operation'
import { CourseService } from '@service/course.service'
import { CourseRepository } from '@repository/course.repository'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Courses
        ]),
    ],
    controllers: [CourseController],
    providers: [
        CourseOperation,
        CourseService,
        CourseRepository
    ],
    exports: [TypeOrmModule, CourseService]
})
export class CourseModule {}
