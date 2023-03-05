import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/adress.entity";
import { Announcement } from "./entities/announcement.entity";
import { initialMigration1677957407486 } from "./migrations/1677957407486-initialMigration";
import { createTables1677957463817 } from "./migrations/1677957463817-createTables";
import { createTables1677958226033 } from "./migrations/1677958226033-createTables";
import { deleteOnCascade1677964141047 } from "./migrations/1677964141047-deleteOnCascade";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        //colocar as entities importadas aqui
        entities: [],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        logging: true,
        synchronize: false,
        //colocar as entities importadas aqui
        entities: [User, Announcement, Address],
        //colocar o arquivo gerado pós migration e depois dar run
        migrations: [
          initialMigration1677957407486,
          createTables1677957463817,
          createTables1677958226033,
          deleteOnCascade1677964141047,
        ],
      }
);

export default AppDataSource;
