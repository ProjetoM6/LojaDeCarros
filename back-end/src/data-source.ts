import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/adress.entity";
import { Announcement } from "./entities/announcement.entity";
import { ImageGalery } from "./entities/image_gallery";

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
        entities: [User, Announcement, Address, ImageGalery],
        //colocar o arquivo gerado pós migration e depois dar run
        migrations: [],
      }
);

export default AppDataSource;
