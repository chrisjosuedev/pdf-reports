import { Controller, Get, Param, Res } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from "express";

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) { }

  @Get()
  async createReport(@Res() res: Response) {
    const pdfDoc = await this.reportsService.getReport();
    
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Informe de Denominación'
    pdfDoc.pipe(res)
    pdfDoc.end()
  }

  @Get(':id')
  async getReportById(@Param('id') id: number, @Res() res: Response) {
    console.log(id)
    const pdfBuffer = await this.reportsService.getReportById(id);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBuffer);
  }
}
