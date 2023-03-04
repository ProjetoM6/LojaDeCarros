import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
