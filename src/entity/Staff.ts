import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("staff")
export class Staff{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    type: "char",
  })
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
