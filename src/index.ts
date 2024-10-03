import { AppDataSource } from "./data-source"
import { Staff } from "./entity/Staff"
import {Roles} from "./entity/Role"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // // Staff Data Insert
    // const staff = new Staff()
    // staff.first_name = "Raj";
    // staff.last_name = "Sathvara";
    // staff.email = "raj.sathavara122@gmail.com";
    // staff.mobile = 8154005222;
    // staff.u_id = "raj0206";
    // staff.role = 1;

    // // Roles Data Insert
    // const Role = new Roles()
    // Role.role = "Super Admin";
    // Role.role_no = 1;

    // await AppDataSource.manager.save([staff,Role])
    // console.log("Saved a New Data")

    // console.log("Loading users from the database...")
    // const staffs = await AppDataSource.manager.find(Staff)
    // console.log("Loaded users: ", staffs)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
