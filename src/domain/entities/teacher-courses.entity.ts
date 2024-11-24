import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { StudentTeacherCourses } from "./student-teacher-courses.entity"
import { Teachers } from "./teachers.entity"
import { Courses } from "./courses.entity"

@Entity()
export class TeacherCourses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'teacher_id'})
    teacherId: number

    @Column({name: 'course_id'})
    courseId: number

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    @OneToMany(() => StudentTeacherCourses, studentTeacherCourses => studentTeacherCourses.teacherCourse)
    studentTeacherCourses: StudentTeacherCourses[]

    @ManyToOne(() => Teachers, (teacher) => teacher.courses)
    @JoinColumn({ name: 'teacher_id' }) 
    teacher: Teachers

    @ManyToOne(() => Courses, (course) => course.teachers)
    @JoinColumn({ name: 'course_id' }) 
    course: Courses
}
