export const pdfBuffer = async (pdfDoc: PDFKit.PDFDocument) => {
  const chunks = []
  return new Promise<Buffer>((resolve, reject) => {
    pdfDoc.on('data', chunk => chunks.push(chunk));
    pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
    pdfDoc.on('error', reject);
    pdfDoc.end();
  })
}