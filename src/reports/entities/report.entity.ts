import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('longtext')
  content: string;
}
