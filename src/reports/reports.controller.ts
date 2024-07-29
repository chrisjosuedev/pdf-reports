import { Controller, Get, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from "express";

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) { }

  @Get()
  async createReport(@Res() res: Response) {
    const pdfDoc = await this.reportsService.getReport();

    res.setHeader('Content-Type', 'application/pdf')
    pdfDoc.info.Title = 'Informe Denominacion'
    pdfDoc.pipe(res)
    pdfDoc.end()
  }
}
