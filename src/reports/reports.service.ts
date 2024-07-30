import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { denominationReport } from "src/helpers/denomination.report";
import { PrinterService } from "src/printer/printer.service";
import { Report } from "./entities/report.entity";
import { Repository } from "typeorm";

import zlib from 'node:zlib'

@Injectable()
export class ReportsService {
  constructor(
    private readonly printer: PrinterService,
    @InjectRepository(Report)
    private _reportRepo: Repository<Report>
  ) { }

  // Generate Report
  async getReport(): Promise<PDFKit.PDFDocument> {
    const docDefinition = denominationReport();

    const pdfDoc = this.printer.createPdf(docDefinition);

    // Guardar Blob

    const chunks = [];
    pdfDoc.on('data', chunk => chunks.push(chunk))
    pdfDoc.on('end', async () => {
      const pdfBuffer = Buffer.concat(chunks);

      // Compressing
      const zip = zlib.gzipSync(pdfBuffer).toString('base64');

      // Compress base 64 + Save on DB
      await this._reportRepo.save({ content: zip })
    })

    return pdfDoc;

  }

  // Get Report By Id
  async getReportById(id: number) {
    const { content } = await this._reportRepo.findOne({ where: { id } })
    // Unzip
    const unzip = zlib.unzipSync(Buffer.from(content, 'base64'));
    return unzip;
  }
}
