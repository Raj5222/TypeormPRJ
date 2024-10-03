import { MigrationInterface, QueryRunner } from "typeorm";

export class Mstaff9181002100000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO staff (first_name,last_name,email,mobile,role,u_id) 
      VALUES ('Raj','Sathvara','raj@gmail.com',8154005222,1,'raj0206')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM staff WHERE u_id='raj0206'`);
  }
}
