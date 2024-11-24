import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { StudentTeacherCourses } from "./student-teacher-courses.entity"

@Entity()
export class Students extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    document: number

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    address: string

    @Column()
    status: boolean

    @Column({ name: 'birth_date', nullable: true })
    birthDate: Date

    @Column({ name: 'concurrent_courses' })
    concurrentCourses: number

	@CreateDateColumn({ name: 'created_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

	@UpdateDateColumn({ name: 'updated_at', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date

    //relations 
    @OneToMany(() => StudentTeacherCourses, (studentTeacherCourses) => studentTeacherCourses.student )
    studentTeacherCourses: StudentTeacherCourses[]
}
