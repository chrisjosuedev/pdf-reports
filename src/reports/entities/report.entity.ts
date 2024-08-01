import { DocumentFormat } from "src/document-format/entities/document-format.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => DocumentFormat, (documentFormat) => documentFormat.reports)
  @JoinColumn({name: 'format_id'})
  formatType: DocumentFormat
}
