import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
// import { Contact } from "./entities/contacts.entity";
import {initialMigration1677869090049} from "./migrations/1677869090049-initialMigration"
import {createTables1677869101009} from "./migrations/1677869101009-createTables"
import { editTables1677869583010} from "./migrations/1677869583010-editTables"
import { Announcement } from "./entities/announcement.entity";

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
        entities: [User, Announcement],
        //colocar o arquivo gerado pós migration e depois dar run
        migrations: [initialMigration1677869090049, createTables1677869101009, editTables1677869583010],
      }
);

export default AppDataSource;
