import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { initialMigration1677796330070 } from "./migrations/1677796330070-initialMigration";
import { createTables1677810362603 } from "./migrations/1677810362603-createTables";
/* import { createTables1677810232976 } from "./migrations/1677810232976-createTables"; */
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
        migrations: [initialMigration1677796330070, createTables1677810362603],
      }
);

export default AppDataSource;
