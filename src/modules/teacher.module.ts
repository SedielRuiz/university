import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeacherOperation } from '@operation/teacher.operation'
import { TeacherRepository } from '@repository/teacher.repository'
import { TeacherService } from '@service/teacher.service'
import { TeacherController } from 'src/controllers/teacher/teacher.controller'
import { Teachers } from 'src/domain/entities/teachers.entity'
import { CourseModule } from './course.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Teachers
        ])
    ],
    controllers: [TeacherController],
    providers: [
        TeacherOperation,
        TeacherService,
        TeacherRepository
    ],
    exports: [TypeOrmModule, TeacherService]
})
export class TeacherModule {}
