import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Comment {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  comments: string;

  @Column()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
