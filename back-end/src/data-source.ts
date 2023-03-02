import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
// import { Contact } from "./entities/contacts.entity";
import { initialMigration1677779259849 } from "./migrations/1677779259849-initialMigration";
import { createTables1677779264357 } from "./migrations/1677779264357-createTables";

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
        entities: [User],
        //colocar o arquivo gerado pós migration e depois dar run
        migrations: [initialMigration1677779259849, createTables1677779264357],
      }
);

export default AppDataSource;
