import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { BaseOperation } from './base-operation'
import { StudentService } from '@service/student.service'
import { ConsultStudentRequest, CreateStudentRequest, RegistrationCourseRequest, UpdateStudentRequest } from 'src/requests/requesters/student.request'
import { Students } from 'src/domain/entities/students.entity'
import { CourseService } from '@service/course.service'
import { Courses, CREDIT_PRICE_USD } from 'src/domain/entities/courses.entity'
import { TeacherCourseService } from '@service/teacher-course.service'
import { Teachers } from 'src/domain/entities/teachers.entity'
import { ConvertCurrencyRequester } from 'src/requests/convert-currency.requester'
@Injectable()
export class StudentOperation implements BaseOperation<any, Promise<any>>
{
    private readonly logger = new Logger(StudentOperation.name)
    private USD = 'USD'
    private EUR = 'EUR'
    constructor(
        private studentService: StudentService,
        private courseService: CourseService,
        private teacherCourseService: TeacherCourseService,
        private convertCurrencyRequester: ConvertCurrencyRequester,
    ) {}
    
    async execute(filters: ConsultStudentRequest): Promise<any> {
        return await this.studentService.all(filters)
    }

    async detail(params): Promise<any> {
        const student: any = await this.studentService.detail(params.id)

        const groupedData = student[0].reduce((acc, item) => {
            const { course, teacher, credits, other_student } = item
        
            let courseEntry = acc.find(entry => entry.course === course)
            
            if (!courseEntry) {
                courseEntry = {
                    course,
                    credits,
                    teacher,
                    courseValueUsd: credits * CREDIT_PRICE_USD,
                    courseValueEur: 0,
                    otherStudents: []
                }
                acc.push(courseEntry)
            }
        
            if (other_student && !courseEntry.otherStudents.includes(other_student)) {
                courseEntry.otherStudents.push(other_student)
            }
        
            return acc
        }, [])

        const courseValueEur = await this.convertCurrency(this.USD, this.EUR)
        for (const entry of groupedData)
            entry.courseValueEur = (entry.courseValueUsd * courseValueEur?.['rates']?.['USD']).toFixed(2)
        

        return groupedData
    }

    async convertCurrency(from: string, to: string): Promise<object> {
        const url = process.env.convert_currency_url + `${from},${to}`
        return await this.convertCurrencyRequester.run({}, url)
    }

    async create(data: CreateStudentRequest): Promise<any> {
        return await this.studentService.create(data)
    }

    async update(params, data: UpdateStudentRequest): Promise<any> {
        const student: Students = await this.studentService.update(params.id, data)
        return {
            message: 'Updated successfull',
            data: student
        }
    }
    async delete(id: number): Promise<any> {
        await this.studentService.delete(id)
        return 'Deleted successfully'
    }

    async registrationCourse(params, data: RegistrationCourseRequest): Promise<any> {
        const student: Students = await this.studentService.findOne({ id: params.id })
        const course: Courses = await this.courseService.findOne({ id: data.courseId, status: true })

        if(student.studentTeacherCourses.length >= student.concurrentCourses)
            throw new BadRequestException('The student has reached the maximum number of courses: ' + student.concurrentCourses)

        const randomTeacher: Teachers = course.teachers[Math.floor(Math.random() * course.teachers.length)]
        if(!randomTeacher)
            throw new BadRequestException('No teacher available for this course')
        
        const isTeacherAssigned = student.studentTeacherCourses.some(studentTeacherCourse => 
            studentTeacherCourse.teacherCourse.teacher.id === randomTeacher.id
        )

        if (isTeacherAssigned)
            throw new BadRequestException('The selected teacher is already assigned to this student')

        const teacherCourse = await this.teacherCourseService.findOne({ teacherId: randomTeacher.id, courseId: course.id })

        await this.studentService.registrationCourse({
            studentId: student.id,
            teacherCourseId: teacherCourse.id
        })

        return {
            message: 'Course registered successfully',
            data: student
        }
    }
}