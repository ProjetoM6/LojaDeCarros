import { MigrationInterface, QueryRunner } from "typeorm";

export class addImgGalery1677985334288 implements MigrationInterface {
    name = 'addImgGalery1677985334288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_galery" ("id" uuid NOT NULL, "img" character varying NOT NULL, "createdAt" character varying NOT NULL, "announcementId" uuid, CONSTRAINT "PK_12f0f16c8e551ca659cb7a14deb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image_galery" ADD CONSTRAINT "FK_f02dcc7e6ba4602e5093726e1ab" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_galery" DROP CONSTRAINT "FK_f02dcc7e6ba4602e5093726e1ab"`);
        await queryRunner.query(`DROP TABLE "image_galery"`);
    }

}
