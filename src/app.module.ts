import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportsModule } from "./reports/reports.module";
import { Report } from "./reports/entities/report.entity";
import { PrinterService } from './printer/printer.service';
import { PrinterModule } from './printer/printer.module';
import { join } from 'path';
import { ServeStaticModule } from "@nestjs/serve-static";
import { DocumentFormatModule } from './document-format/document-format.module';
import { DocumentFormat } from "./document-format/entities/document-format.entity";

@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'pdfdb',
      autoLoadEntities: true,
      entities: [Report, DocumentFormat],
      synchronize: false,
    }),
    ReportsModule,
    PrinterModule,
    DocumentFormatModule,
  ],
  providers: [PrinterService],
})
export class AppModule { }
