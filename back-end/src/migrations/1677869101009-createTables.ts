import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677869101009 implements MigrationInterface {
    name = 'createTables1677869101009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL, "type" character varying NOT NULL, "title" character varying NOT NULL, "year" character varying NOT NULL, "km" character varying NOT NULL, "price" character varying NOT NULL, "type_vehicle" character varying NOT NULL, "img_cover" character varying NOT NULL, "createdAt" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "date_of_birth" character varying NOT NULL, "type" character varying NOT NULL, "password" character varying NOT NULL, "token_reset_password" character varying NOT NULL, "createdAt" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_fd25dfe3da37df1715f11ba6ec8"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
    }

}
