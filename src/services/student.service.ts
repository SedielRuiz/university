import { Injectable, Logger } from '@nestjs/common'
import { StudentRepository } from '@repository/student.repository'
import { StudentTeacherCourses } from 'src/domain/entities/student-teacher-courses.entity'
import { Students } from 'src/domain/entities/students.entity'
import { ConsultStudentRequest, CreateStudentRequest, UpdateStudentRequest } from 'src/requests/requesters/student.request'

@Injectable()
export class StudentService {
    private readonly logger = new Logger(StudentService.name)

    constructor(private studentRepository: StudentRepository) {}

    async all (filter: ConsultStudentRequest): Promise<Students[]> {
        return await this.studentRepository.all(filter)
    }

    async detail(studentId: number): Promise<any> {
        return await this.studentRepository.detail(studentId)
    }

    async findOne(filter: Partial<ConsultStudentRequest>): Promise<Students> {
        return await this.studentRepository.findOne(filter)
    }

    async create (data: CreateStudentRequest): Promise<Students> {
        return await this.studentRepository.create(data)
    }

    async update (id: number, data: UpdateStudentRequest): Promise<Students> {
        return await this.studentRepository.update(id, data)
    }

    async delete(id: number): Promise<void> {
        await this.studentRepository.delete(id)
    }

    async registrationCourse(studentTeacherCourses: Partial<StudentTeacherCourses>): Promise<void> {
        await this.studentRepository.registrationCourse(studentTeacherCourses)
    }
}
