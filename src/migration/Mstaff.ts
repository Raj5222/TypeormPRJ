import { MigrationInterface, QueryRunner } from "typeorm";

export class Mstaff9181002100000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO staff (first_name,last_name,email,mobile,role) 
      VALUES ('Raj','Sathvara','raj@gmail.com',8154005222,1)`
    );
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM staff WHERE staff_u_id=1`);
  }
}
