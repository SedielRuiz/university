import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1732402821120 implements MigrationInterface {
    name = 'NpmConfigName1732402821120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE teacher_courses (
                id BIGINT NOT NULL AUTO_INCREMENT,
                teacher_id BIGINT NOT NULL,
                course_id BIGINT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT PK_b9535a98350d5b26e7eb0c26af7 PRIMARY KEY (id)
            )
        `)
        await queryRunner.query(`ALTER TABLE teacher_courses ADD CONSTRAINT FK_a9d5501aef6810d644bfc9f4576 FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE teacher_courses ADD CONSTRAINT FK_a9d5501aef6810d644bfc9f4577 FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);

        await queryRunner.query(`INSERT INTO teacher_courses (teacher_id, course_id, created_at, updated_at)
                                VALUES
                                -- Dr. John Smith (teacher_id = 1)
                                (1, 1, NOW(), NOW()),
                                (1, 2, NOW(), NOW()),

                                -- Prof. Emily Davis (teacher_id = 2)
                                (2, 3, NOW(), NOW()),
                                (2, 4, NOW(), NOW()),

                                -- Dr. Robert Brown (teacher_id = 3)
                                (3, 5, NOW(), NOW()),
                                (3, 6, NOW(), NOW()),

                                -- Prof. Laura Wilson (teacher_id = 4)
                                (4, 7, NOW(), NOW()),
                                (4, 8, NOW(), NOW()),

                                -- Dr. James Anderson (teacher_id = 5)
                                (5, 9, NOW(), NOW()),
                                (5, 10, NOW(), NOW());

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE teacher_courses DROP CONSTRAINT FK_a9d5501aef6810d644bfc9f4576`);
        await queryRunner.query(`ALTER TABLE teacher_courses DROP CONSTRAINT FK_a9d5501aef6810d644bfc9f4577`);
        await queryRunner.query(`DROP TABLE teacher_courses`)
    }

}
