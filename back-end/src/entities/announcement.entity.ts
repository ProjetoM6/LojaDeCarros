import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
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
  type_vehicle: string;

  @Column()
  img_cover: string;

  @ManyToOne(() => User, (user) => user.announcement)
  user: User;

  @ManyToOne(() => ImageGalery, (imgGalery) => imgGalery.announcement)
  imgGalery: ImageGalery;

  @Column()
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
