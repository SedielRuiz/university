import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { StudentTeacherCourses } from 'src/domain/entities/student-teacher-courses.entity'
import { Students } from 'src/domain/entities/students.entity'
import { ConsultStudentRequest, CreateStudentRequest } from 'src/requests/requesters/student.request'
import { Repository, DataSource } from 'typeorm'

@Injectable()
export class StudentRepository {

    constructor(
        private readonly dataSource: DataSource,

        @InjectRepository(Students)
        private studentRepository: Repository<Students>,

        @InjectRepository(StudentTeacherCourses)
        private studentTeacherCourses: Repository<StudentTeacherCourses>,
    ) {}

    async all (filter: ConsultStudentRequest): Promise<Students[]> {
        const students: Students[] = await this.studentRepository.find({
            where: filter,
            relations: ['studentTeacherCourses']
        })

        return students
    }

    async detail(studentId: number): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner()
        try {
            await queryRunner.connect()
            const result = await queryRunner.query(
                `CALL GetStudentCoursesAndValues(?)`,
                [studentId],
            )
            return result
        } finally {
            await queryRunner.release()
        }
    }

    async findOne (filter: Partial<ConsultStudentRequest>): Promise<Students> {
        const student: Students = await this.studentRepository.findOne({
            where: filter,
            relations: {
                studentTeacherCourses: {
                    teacherCourse: {
                        teacher: true
                    }
                }
            }
        })

        if (!student)
            throw new NotFoundException(`Student with [filter: ${JSON.stringify(filter)}] not found`)

        return student
    }

    async create (data: CreateStudentRequest): Promise<Students> {
        const student: Students = await this.studentRepository.save(data)

        if (!student)
            throw new NotFoundException(`Student with [body: ${JSON.stringify(data)}] not created`)

        return student
    }

    async update (id: number, data: Partial<Students>): Promise<Students> {
        await this.studentRepository.update(id, data)

        const student: Students = await this.studentRepository.findOne({
            where: { id }
        })

        if (!student)
            throw new NotFoundException(`Student with [body: ${JSON.stringify(data)}] not updated`)


        return student
    }

    async delete(id: number) {
        const student: any = await this.studentRepository.delete(id)
        if (!student)
            throw new NotFoundException(`Student with ID ${id} not found`)
    }

    async registrationCourse(studenTeacherCourse: Partial<StudentTeacherCourses>): Promise<void> {
        await this.studentTeacherCourses.save(studenTeacherCourse)
    }

}
