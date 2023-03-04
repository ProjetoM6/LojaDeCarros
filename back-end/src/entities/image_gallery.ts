import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Announcement } from "./announcement.entity";

@Entity()
export class ImageGalery {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  img: string;

  @Column()
  createdAt: string;

  @OneToMany(() => Announcement, (announcement) => announcement.imgGalery, {
    eager: true,
  })
  announcement: Announcement;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
