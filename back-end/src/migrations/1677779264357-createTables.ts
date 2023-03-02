import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677779264357 implements MigrationInterface {
    name = 'createTables1677779264357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "date_of_birth" character varying NOT NULL, "type" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
