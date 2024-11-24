import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Courses } from "./courses.entity"
import { TeacherCourses } from "./teacher-courses.entity"

@Entity()
export class Teachers extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({name: 'courses_offered'})
    coursesOffered: string

    @Column()
    status: boolean

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    @OneToMany(() => TeacherCourses, teacherCourses => teacherCourses.teacher)
    teacherCourses: TeacherCourses[]

    @ManyToMany(() => Courses, course => course.teachers)
    @JoinTable({
        name: 'teacher_courses',
        joinColumn: { name: 'teacher_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'course_id', referencedColumnName: 'id' }
    })
    courses: Courses[]
}
