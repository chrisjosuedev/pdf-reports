import { DataSource } from 'typeorm';
import { Report } from "./reports/entities/report.entity";
import { DocumentFormat } from "./document-format/entities/document-format.entity";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'pdfdb',
  entities: [Report, DocumentFormat],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
});