import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { denominationReport } from "src/helpers/denomination.report";
import { PrinterService } from "src/printer/printer.service";
import { Report } from "./entities/report.entity";
import { Repository } from "typeorm";
import { pdfBuffer } from "src/helpers/pdf.buffer.plugin/pdfBuffer";
import { DocumentFormat } from "src/document-format/entities/document-format.entity";

@Injectable()
export class ReportsService {
  constructor(
    private readonly printer: PrinterService,
    @InjectRepository(Report)
    private _reportRepo: Repository<Report>,
    @InjectRepository(DocumentFormat)
    private _documentoFormatRepo: Repository<DocumentFormat>
  ) { }

  // Generate Report
  async generateReport(): Promise<PDFKit.PDFDocument> {
    const docDefinition = denominationReport();

    // Find documentFormat
    const documentFormat = await this._documentoFormatRepo.findOne({ where: { id: 2 } })

    // Saving docDefinition as JSON
    await this._reportRepo
      .save({ content: JSON.stringify(docDefinition), formatType: documentFormat })

    // Create PDF
    const pdfDoc = this.printer.createPdf(docDefinition);

    // Return pdfDoc
    return pdfDoc;
  }

  // Get Report By Id
  async getReportById(id: number) {
    // Find Report by ID and get Content
    const { content } = await this._reportRepo.findOne({ where: { id } })

    // Create PDF
    const pdfDoc = this.printer.createPdf(JSON.parse(content))

    // Get Buffer
    const buffer = await pdfBuffer(pdfDoc)

    // Return buffer
    return buffer
  }
}
