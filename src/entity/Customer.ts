import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,ManyToOne,JoinColumn
} from "typeorm";
import { Roles } from "./Role";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn()
  cust_u_id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({
    unique: true,
  })
  email: string;

  @ManyToOne(() => Roles, (role) => role.role_u_id)
  @JoinColumn({ name: "role" })
  @Column({ default: 4})
  role: number;

  @Column({
    type: "bigint",
  })
  mobile: number;
  @Column({
    unique: true,
  })
  u_id: string;
  @CreateDateColumn()
  Create_Time: string;
}
