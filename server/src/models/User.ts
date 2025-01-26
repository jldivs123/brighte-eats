import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Service } from "@models/Service";

@ObjectType()
@Entity()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  postal: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  mobile: string;

  @ManyToMany(() => Service, (service) => service.users)
  @JoinTable()
  services: Service[];
}
