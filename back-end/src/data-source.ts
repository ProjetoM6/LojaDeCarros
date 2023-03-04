import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/adress.entity";
import { Announcement } from "./entities/announcement.entity";

import { initialMigration1677941328223 } from "./migrations/1677941328223-initialMigration";
import { createTables1677941344515 } from "./migrations/1677941344515-createTables";

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
        migrations: [initialMigration1677941328223, createTables1677941344515],
      }
);

export default AppDataSource;
