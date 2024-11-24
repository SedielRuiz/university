import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1732403325370 implements MigrationInterface {
    name = 'NpmConfigName1732403325370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE student_teacher_courses (
                id BIGINT NOT NULL AUTO_INCREMENT,
                student_id BIGINT NOT NULL,
                teacher_course_id BIGINT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT PK_b9535a98350d5b26e7eb0c26af8 PRIMARY KEY (id)
            )
        `)
        await queryRunner.query(`ALTER TABLE student_teacher_courses ADD CONSTRAINT FK_a9d5501aef6810d644bfc9f4578 FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE student_teacher_courses ADD CONSTRAINT FK_a9d5501aef6810d644bfc9f4579 FOREIGN KEY (teacher_course_id) REFERENCES teacher_courses(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`
            CREATE PROCEDURE GetStudentCoursesAndValues (
                IN student_id BIGINT
            )
            BEGIN
                SELECT 
                    s.name AS self_student, 
                    c.name AS course, 
                    t.name AS teacher, 
                    ss.name AS other_student,
                    c.credits
                FROM students s
                INNER JOIN student_teacher_courses stc ON stc.student_id = s.id
                INNER JOIN teacher_courses tc ON stc.teacher_course_id = tc.id
                INNER JOIN courses c ON tc.course_id = c.id
                INNER JOIN teachers t ON tc.teacher_id = t.id
                LEFT JOIN student_teacher_courses stc2 ON stc2.teacher_course_id = stc.teacher_course_id
                LEFT JOIN students ss ON stc2.student_id = ss.id AND ss.id != s.id
                WHERE s.id = student_id ORDER BY c.name, t.name, ss.name;
            END;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE student_teacher_courses DROP CONSTRAINT FK_a9d5501aef6810d644bfc9f4578`);
        await queryRunner.query(`ALTER TABLE student_teacher_courses DROP CONSTRAINT FK_a9d5501aef6810d644bfc9f4579`);
        await queryRunner.query(`DROP TABLE student_teacher_courses`)
    }

}
