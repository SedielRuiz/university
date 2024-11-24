import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1732402201127 implements MigrationInterface {
    name = 'NpmConfigName1732402201127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE teachers (
                id BIGINT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                courses_offered INT NOT NULL,
                status BOOLEAN NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT PK_b9535a98350d5b26e7eb0c26af5 PRIMARY KEY (id)
            )
        `)
        await queryRunner.query(`INSERT INTO teachers (name, courses_offered, status, created_at, updated_at)
                                VALUES 
                                ('Dr. John Smith', 2, true, NOW(), NOW()),
                                ('Prof. Emily Davis', 2, true, NOW(), NOW()),
                                ('Dr. Robert Brown', 2, true, NOW(), NOW()),
                                ('Prof. Laura Wilson', 2, true, NOW(), NOW()),
                                ('Dr. James Anderson', 2, true, NOW(), NOW());
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE teachers`)
    }

}
