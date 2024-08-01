import { Report } from "src/reports/entities/report.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('document_format')
export class DocumentFormat {
  @PrimaryGeneratedColumn('increment')
  id: number; 

  @Column({
    type: 'varchar',
    length: 5
  })
  formatName: string;

  @OneToMany(() => Report, (report) => report.formatType)
  reports: Report[]
}