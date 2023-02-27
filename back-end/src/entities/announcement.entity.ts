import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Address {
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

  @Column()
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
