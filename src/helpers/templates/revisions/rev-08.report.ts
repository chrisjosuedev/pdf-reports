import { Content, TDocumentDefinitions } from "pdfmake/interfaces"

export const reportRevision_08 = (content: Content): TDocumentDefinitions => {
  return {
    pageMargins: [61, 115, 61, 80],
    header: {
      stack: [
        {
          columns: [
            {
              image: 'public/images/honduras_emprende_logo_v2.png',
              width: 95,
              height: 30,
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
                  image: 'public/images/senprende_gob_logos.jpg',
                  width: 120,
                  height: 35,
                  margin: [0, 0, 20, 100]
                }
              ],
              alignment: 'right'
            }
          ],
          marginLeft: 45,
          marginTop: 38,
          marginBottom: 40,
        },
      ]
    },
    content,
    footer: {
      stack: [
        {
          text: 'Boulevard Juan Pablo II, Centro Cívico Gubernamental, Torre 2, Niveles Nº 12 y Nº 21 Tegucigalpa. \n\n',
          alignment: 'center',
          lineHeight: 1.1,
          fontSize: 12,
          marginTop: 18
        },
        {
          text: 'UPEG.R.01 | Revisión 08 | mayo del 2023',
          alignment: 'center',
          lineHeight: 1.1,
          fontSize: 9,
        }
      ],
    },
    defaultStyle: {
      font: 'Arial'
    },
    pageSize: 'LEGAL',
    background: [
      {
        image: 'public/images/water_mark_blank.jpg',
        width: 612,
        height: 1008.126
      }
    ]
  }
}