import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Teachers } from 'src/domain/entities/teachers.entity'
import { ConsultTeacherRequest } from 'src/requests/requesters/teacher.request'
import { Repository } from 'typeorm'

@Injectable()
export class TeacherRepository {

    constructor(
        @InjectRepository(Teachers)
        private employeeRepository: Repository<Teachers>,
    ) {}

    async all (filter: Partial<ConsultTeacherRequest>): Promise<Teachers[]> {
        const teachers: Teachers[] = await this.employeeRepository.find({
            where: filter,
            relations: {
                teacherCourses: {
                    course: true,
                    studentTeacherCourses: {
                        student: true
                    }
                }
            }
        })

        return teachers
    }

    async findOne (filter: Partial<ConsultTeacherRequest>): Promise<Teachers> {
        const course: Teachers = await this.employeeRepository.findOne({
            where: filter,
            relations: ['teachers']
        })

        if (!course)
            throw new NotFoundException(`Course with [filter: ${JSON.stringify(filter)}] not found`)

        return course
    }

}
