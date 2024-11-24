import { MigrationInterface, QueryRunner } from "typeorm";

export class NpmConfigName1732402697573 implements MigrationInterface {
    name = 'NpmConfigName1732402697573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE students (
                id BIGINT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                document BIGINT NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone BIGINT NOT NULL,
                address VARCHAR(255) NOT NULL,
                status BOOLEAN NOT NULL DEFAULT true,
                birth_date TIMESTAMP,
                concurrent_courses INT NOT NULL DEFAULT 3,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT PK_b9535a98350d5b26e7eb0c26af6 PRIMARY KEY (id)
            )
        `)
        await queryRunner.query(`INSERT INTO students 
                                (name, lastname, document, email, phone, address, status, birth_date, concurrent_courses, created_at, updated_at)
                                VALUES
                                ('John', 'Doe', 12345678901, 'john.doe@example.com', 5551234567, '123 Main St, Cityville', true, '2000-01-15', 3, NOW(), NOW()),
                                ('Jane', 'Smith', 12345678902, 'jane.smith@example.com', 5551234568, '456 Elm St, Townsville', true, '1999-11-23', 3, NOW(), NOW()),
                                ('Alice', 'Johnson', 12345678903, 'alice.johnson@example.com', 5551234569, '789 Oak St, Villageton', true, '2001-05-10', 3, NOW(), NOW()),
                                ('Bob', 'Brown', 12345678904, 'bob.brown@example.com', 5551234570, '101 Pine St, Hamletburg', true, '2002-07-12', 3, NOW(), NOW()),
                                ('Charlie', 'Davis', 12345678905, 'charlie.davis@example.com', 5551234571, '202 Birch St, Suburbia', true, '2000-03-08', 3, NOW(), NOW()),
                                ('Emily', 'Wilson', 12345678906, 'emily.wilson@example.com', 5551234572, '303 Cedar St, Metropolis', true, '1998-12-05', 3, NOW(), NOW()),
                                ('David', 'Clark', 12345678907, 'david.clark@example.com', 5551234573, '404 Maple St, Cosmopolis', true, '2001-02-19', 3, NOW(), NOW()),
                                ('Sophia', 'Martinez', 12345678908, 'sophia.martinez@example.com', 5551234574, '505 Willow St, Urbania', true, '2002-10-22', 3, NOW(), NOW()),
                                ('Liam', 'Garcia', 12345678909, 'liam.garcia@example.com', 5551234575, '606 Spruce St, Capitol City', true, '1999-09-30', 3, NOW(), NOW()),
                                ('Olivia', 'Rodriguez', 12345678910, 'olivia.rodriguez@example.com', 5551234576, '707 Aspen St, Uptown', true, '1997-04-25', 3, NOW(), NOW());

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE students`)
    }

}
