import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PrinterService } from "src/printer/printer.service";
import { Report } from "./entities/report.entity";
import { Repository } from "typeorm";
import { pdfBuffer } from "src/helpers/plugins/pdfBuffer";
import { DocumentFormat } from "src/document-format/entities/document-format.entity";
import { getRevisionContent } from "src/helpers/plugins/revision.generator";
import { denominationReport } from "src/helpers/templates/documents/denomination.report";
import { GenerateDocumentService } from "src/helpers/services/generate-document.service";
import { getPdfContentFromHtml } from "src/helpers/plugins/html-pdf";

@Injectable()
export class ReportsService {
  constructor(
    private readonly printer: PrinterService,
    @InjectRepository(Report)
    private _reportRepo: Repository<Report>,
    @InjectRepository(DocumentFormat)
    private _documentoFormatRepo: Repository<DocumentFormat>,
    private _generateDocument: GenerateDocumentService
  ) { }

  // Generate Report
  async generateReport(): Promise<PDFKit.PDFDocument> {
    
    const docDenominationReport = this._generateDocument.generateDenominationReport();

    // Find documentFormat
    const documentFormat = await this._documentoFormatRepo.findOne({ where: { id: 2 } })

    // Saving docDefinition as JSON
    await this._reportRepo
      .save({ content: JSON.stringify(docDenominationReport), formatType: documentFormat })

    // Create PDF
    const pdfDoc = this.printer.createPdf(docDenominationReport);

    // Return pdfDoc
    return pdfDoc;
  }

  // Get Report By Id
  async getReportById(id: number) {
    let pdfDoc: PDFKit.PDFDocument;

    // Find Report by ID and get Content
    const report = await this._reportRepo
      .findOne({ where: { id }, relations: ['formatType'] })

    // Verify if report is in HTML Format
    if (report.formatType.id === 1) {
      // extract
      const revision = getRevisionContent(report.content);

      // get html
      const content = getPdfContentFromHtml(report.content);

      // Generate Document Definitions
      const documentGenerated = this._generateDocument.generateReportFromHtml(content, revision);

      // Generate PDF
      pdfDoc = this.printer.createPdf(documentGenerated);
      
      // return pdf buffer
      return await pdfBuffer(pdfDoc)
    }
    
    // Create PDF if report is JSON Format
    pdfDoc = this.printer.createPdf(JSON.parse(report.content))
    // Return buffer
    return await pdfBuffer(pdfDoc)
  }
}
