import htmlToPdfMake from 'html-to-pdfmake'
import { JSDOM } from 'jsdom';

export const getPdfContentFromHtml = (htmlContent: string) => {
  const { window } = new JSDOM('');
  const content = htmlToPdfMake(htmlContent, {
    window: window,
    defaultStyles: {
      strong: {
        decoration: '',
        marginTop: 50,
      },
    },
  });

  // GET DTL  html structure only
  const mainContent = content[1].stack[0].table.body[1][0].stack[0];

  return mainContent;
}