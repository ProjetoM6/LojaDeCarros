import { DataSource } from "typeorm";
import "dotenv/config";
// import { User } from "./entities/user.entity";
// import { Contact } from "./entities/contacts.entity";
// import { initialMigration1676221798889 } from "./migrations/1676221798889-initialMigration";

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
        entities: [],
        //colocar o arquivo gerado pós migration e depois dar run
        migrations: [],
      }
);

export default AppDataSource;
