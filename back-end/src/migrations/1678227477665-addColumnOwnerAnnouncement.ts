import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumnOwnerAnnouncement1678227477665 implements MigrationInterface {
    name = 'addColumnOwnerAnnouncement1678227477665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "owner_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "owner_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "owner_description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "owner_description"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "owner_name"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "owner_id"`);
    }

}
