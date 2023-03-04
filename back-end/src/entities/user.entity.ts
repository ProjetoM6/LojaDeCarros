import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Address } from "./adress.entity";
import { Announcement } from "./announcement.entity";
@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  date_of_birth: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @Column()
  password: string;

  @Column({ default: null })
  token_reset_password: string;

  @OneToMany(() => Announcement, (announcement) => announcement.user, {
    eager: true,
  })
  announcement: Announcement[];

  @Column()
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
