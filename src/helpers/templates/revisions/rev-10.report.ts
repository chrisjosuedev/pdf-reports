import { Content, TDocumentDefinitions } from "pdfmake/interfaces"

export const reportRevision_10 = (content: Content): TDocumentDefinitions => {
  return {
    pageMargins: [61, 90, 61, 80],   
    header: {
      stack: [
        {
          text: `Referencia: ${new Date().getTime()}`,
          alignment: 'right',
          margin: [4, 4],
          font: 'Arial',
          fontSize: 10,
        },
        {
          columns: [
            {
              image: 'public/images/logo_honduras_emprende_solidaria.jpg',
              width: 118,
              height: 48,
              opacity: 0.55,
              alignment: 'left'
            },
            {
              width: '*',
              text: ''
            },
            {
              columns: [
                {
                  width: '*',
                  text: ''
                },
                {
                  image: 'public/images/gob_logo.png',
                  width: 48,
                  height: 43,
                  marginRight: 2,
                  opacity: 0.60
                },
                {
                  image: 'public/images/logo_senprende.jpg',
                  width: 87,
                  height: 42,
                  opacity: 0.55
                }
              ],
              alignment: 'right'
            }
          ],
          marginLeft: 61,
          marginRight: 61,
          marginTop: 15
        },
      ]
    },
    content,
    footer: {
      stack: [
        {
          image: 'public/images/footer_logos.jpg',
          alignment: 'center',
          width: 450,
          opacity: 0.5,
          margin: [0, 0]
        },
        {
          text: 'Boulevard Juan Pablo II, Centro Cívico Gubernamental, Torre 2, Niveles Nº 12 y Nº 21 Tegucigalpa. \nUPEG.R.01 | Revisión 10 | julio del 2024',
          alignment: 'center',
          lineHeight: 1.1,
          fontSize: 9,
          color: 'gray',
          bold: true,
          marginTop: 5
        }
      ],
    },
    defaultStyle: {
      font: 'Arial'
    },
    pageSize: 'LEGAL',
    background: [
      {
        image: 'public/images/water_mark_blank_new.jpg',
        width: 612,
        height: 1008.126
      }
    ]
  }
}