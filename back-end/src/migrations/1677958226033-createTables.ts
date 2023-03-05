import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677958226033 implements MigrationInterface {
    name = 'createTables1677958226033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "createdAt" character varying NOT NULL`);
    }

}
