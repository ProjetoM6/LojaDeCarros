import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";
import { ImageGalery } from "./image_gallery";
@Entity()
export class Announcement {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  km: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @Column()
  type_vehicle: string;

  @Column()
  img_cover: string;

  @ManyToOne(() => User, (user) => user.announcement, {
    onDelete: "CASCADE",
  })
  user: User;

  @OneToMany(() => ImageGalery, (imgGalery) => imgGalery.announcement, {
    eager: true,
    onDelete: "CASCADE",
  })
  img_galery: ImageGalery[];

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
