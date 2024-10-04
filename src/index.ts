import { AppDataSource } from "./data-source"
import { Staff } from "./entity/Staff"
import {Roles} from "./entity/Role"
import { Customer } from "./entity/Customer"

AppDataSource.initialize().then(async () => {

    const firstUser = await AppDataSource.getRepository(Staff)
      .createQueryBuilder("staff")
      .where("staff.staff_u_id = :id", { id: 1 })
      .getMany();

    console.log(firstUser)

}).catch(error => console.log(error))
