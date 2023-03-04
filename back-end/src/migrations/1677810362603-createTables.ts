import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677810362603 implements MigrationInterface {
    name = 'createTables1677810362603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "token_reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "token_reset_password"`);
    }

}
