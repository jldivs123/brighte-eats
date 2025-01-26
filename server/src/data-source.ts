import { DataSource } from "typeorm";

import { User } from "@models/User";
import { Service } from "@models/Service";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User, Service],
  subscribers: [],
  migrations: [],
});
