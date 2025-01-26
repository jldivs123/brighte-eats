import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { User } from "@models/User";

@ObjectType()
@Entity()
export class Service {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.services)
  users: User[];
}
