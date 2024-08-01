import { Controller, Get, Param, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from "express";

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) { }

  // Generating PDF
  @Get()
  async createReport(@Res() res: Response) {
    const pdfDoc = await this.reportsService.generateReport();

    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Informe de Denominación'
    pdfDoc.pipe(res)
    pdfDoc.end()
  }

  // Get PDF by ID
  @Get(':id')
  async getReportById(@Param('id') id: number, @Res() res: Response) {
    const reportPdf = await this.reportsService.getReportById(id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=denomination.pdf');
    res.send(reportPdf)
  }
}
