import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
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

  @ManyToOne(() => Announcement, (announcement) => announcement.img_galery, {
    onDelete: "CASCADE",
  })
  announcement: Announcement;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
