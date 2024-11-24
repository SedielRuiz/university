import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Students } from "./students.entity"
import { TeacherCourses } from "./teacher-courses.entity"

@Entity()
export class StudentTeacherCourses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'student_id'})
    studentId: number

    @Column({name: 'teacher_course_id'})
    teacherCourseId: number

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    @ManyToOne(() => Students, student => student.studentTeacherCourses)
    @JoinColumn({ name: 'student_id' })
    student: Students

    @ManyToOne(() => TeacherCourses, teacherCourse => teacherCourse.studentTeacherCourses)
    @JoinColumn({ name: 'teacher_course_id' }) 
    teacherCourse: TeacherCourses
}
