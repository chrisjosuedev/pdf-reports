import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake'
import { TDocumentDefinitions } from "pdfmake/interfaces";

const fonts = {
  Arial: {
    normal: 'fonts/arial.ttf',
    bold: 'fonts/arial-bold.ttf',
    italics: 'fonts/arial-light.ttf',
  }
}

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  createPdf(docDefinition: TDocumentDefinitions) {
    return this.printer.createPdfKitDocument(docDefinition);
  }

}
