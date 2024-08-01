import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1722543927041 implements MigrationInterface {
    name = ' $npmConfigName1722543927041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`report\` ADD CONSTRAINT \`FK_69b1cc64343a59d5c834a8709c8\` FOREIGN KEY (\`format_id\`) REFERENCES \`document_format\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_69b1cc64343a59d5c834a8709c8\``);
    }

}
