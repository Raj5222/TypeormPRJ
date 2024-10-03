import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("role")
export class Roles{
  @PrimaryGeneratedColumn()
  role_p_id: number;
  @Column({
    unique: true,
  })
  role: string;
  @Column({
    unique: true,
  })
  role_no: number;
}
