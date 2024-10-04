import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

export enum UserRole {
  SUPER_ADMIN = "Super Admin",
  ADMIN = "Admin",
  STAFF = "Staff",
  CUSTOMER = "Customer",
}
@Entity("role")
export class Roles{
  @PrimaryGeneratedColumn()
  role_u_id: number;
  @Column({
    unique: true,
    enum: UserRole,
  })
  role: UserRole
}
