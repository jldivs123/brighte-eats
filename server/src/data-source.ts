import { DataSource } from 'typeorm';

// import { User } from "@models/User";
// import { Service } from "@models/Service";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mydatabase',
  synchronize: true,
  // logging: true,
  // entities: [User, Service],
  // subscribers: [],
  migrations: ['./src/migrations'],
});
