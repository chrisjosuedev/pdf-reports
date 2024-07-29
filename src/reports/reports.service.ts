import { Injectable } from '@nestjs/common';
import { denominationReport } from "src/helpers/denomination.report";
import { PrinterService } from "src/printer/printer.service";

@Injectable()
export class ReportsService {
  constructor(private readonly printer: PrinterService) { }

  async getReport(): Promise<PDFKit.PDFDocument> {
    const docDefinition = denominationReport();


    return this.printer.createPdf(docDefinition)
  }
}
