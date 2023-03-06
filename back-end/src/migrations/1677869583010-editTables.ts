import { MigrationInterface, QueryRunner } from "typeorm";

export class editTables1677869583010 implements MigrationInterface {
    name = 'editTables1677869583010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "token_reset_password" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "token_reset_password" SET NOT NULL`);
    }

}
