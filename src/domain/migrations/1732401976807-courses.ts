import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1732401976807 implements MigrationInterface {
    name = 'NpmConfigName1732401976807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE courses (
                id BIGINT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                credits INT NOT NULL,
                status BOOLEAN NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT PK_b9535a98350d5b26e7eb0c26af4 PRIMARY KEY (id)
            )
        `)
        await queryRunner.query(`INSERT INTO courses (name, description, credits, status, created_at, updated_at)
                                VALUES 
                                ('Mathematics', 'Basic principles of algebra and calculus', 3, true, NOW(), NOW()),
                                ('Physics', 'Introduction to mechanics and thermodynamics', 3, true, NOW(), NOW()),
                                ('Chemistry', 'Fundamentals of organic and inorganic chemistry', 3, true, NOW(), NOW()),
                                ('Biology', 'Cell biology and genetics overview', 3, true, NOW(), NOW()),
                                ('Computer Science', 'Introduction to programming and algorithms', 3, true, NOW(), NOW()),
                                ('History', 'World history from ancient to modern times', 3, true, NOW(), NOW()),
                                ('English Literature', 'Study of classic and modern English works', 3, true, NOW(), NOW()),
                                ('Economics', 'Principles of microeconomics and macroeconomics', 3, true, NOW(), NOW()),
                                ('Philosophy', 'Introduction to philosophical thought and ethics', 3, true, NOW(), NOW()),
                                ('Art', 'Basics of drawing, painting, and art history', 3, true, NOW(), NOW());
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE courses`)
    }

}
