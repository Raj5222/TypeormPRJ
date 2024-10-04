import "reflect-metadata";
import { DataSource } from "typeorm";
import { Staff } from "./entity/Staff";
import { Roles } from "./entity/Role";
import { Customer } from "./entity/Customer";
import { Mstaff9181002100000 } from "./migration/Mstaff";
import { MRole1696010000000 } from "./migration/Mrole";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Ensure that we have the necessary environment variables
if (
  !process.env.type ||
  !process.env.host ||
  !process.env.port ||
  !process.env.username ||
  !process.env.password ||
  !process.env.database
) {
  throw new Error("Missing necessary environment variables in .env file");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.host,
  port: parseInt(process.env.port),
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  synchronize: true,
  logging: false,
  entities: [Staff, Roles, Customer],
  migrations: [MRole1696010000000, Mstaff9181002100000],
});
