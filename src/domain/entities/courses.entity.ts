import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Teachers } from "./teachers.entity"
import { TeacherCourses } from "./teacher-courses.entity"

export const CREDIT_PRICE_USD = 150

@Entity()
export class Courses extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    credits: number

    @Column()
    status: boolean

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    @OneToMany(() => TeacherCourses, teacherCourses => teacherCourses.teacher)
    teacherCourses: TeacherCourses[]

    @ManyToMany(() => Teachers, teacher => teacher.courses)
    @JoinTable({
        name: 'teacher_courses',
        joinColumn: { name: 'course_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'teacher_id', referencedColumnName: 'id' }
    })
    teachers: Teachers[]
}
