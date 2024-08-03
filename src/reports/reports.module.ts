import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Report } from "./entities/report.entity";
import { PrinterModule } from "src/printer/printer.module";
import { DocumentFormatModule } from "src/document-format/document-format.module";
import { ReportsService } from "./reports.service";
import { HelpersModule } from "src/helpers/helpers.module";

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [TypeOrmModule.forFeature([Report]), DocumentFormatModule, PrinterModule, HelpersModule]
})
export class ReportsModule { }
