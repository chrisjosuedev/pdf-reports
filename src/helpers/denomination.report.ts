import { TDocumentDefinitions } from "pdfmake/interfaces"

export const denominationReport = (): TDocumentDefinitions => {
  return {
    pageMargins: [61, 31, 61, 75],
    header: {
      text: 'Referencia: 22420',
      alignment: 'right',
      margin: [4, 4],
      font: 'Arial',
      fontSize: 10,
    },
    content: [
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
                marginRight: 2
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
      },
      {
        text: 'SERVICIO NACIONAL DE EMPRENDIMIENTO Y DE PEQUEÑOS NEGOCIOS',
        bold: true,
        fontSize: 14,
        alignment: 'center',
        margin: [0, 48, 0, 26]
      },
      {
        text: 'SENPRENDE \nSUBDIRECCIÓN DE FORMALIZACIÓN\nINFORME DE DENOMINACIÓN',
        bold: true,
        fontSize: 12,
        alignment: 'center',
      },
      {
        text: [
          'La Sub Dirección de Formalización, INFORMA: Que, en los libros de registro de las empresas y organizaciones del Sector Social de la Economía, NO SE ENCUENTRA REGISTRADA la ',
          {
            text: '“ASOCIACIÓN GUANGOLOLO STORE”',
            bold: true
          },
          'con domicilio en EL CASERIO HACDA. ALTAMIRA, ALDEA BIJAGUAL, MUNICIPIO DE JUTICALPA, DEPARTAMENTO DE OLANCHO, cuya actividad principal y única será PRODUCCIÓN, INDUSTRIALIZACIÓN, TRANSFORMACIÓN Y COMERCIALIZACIÓN DE UN PRODUCTO O MATERIA PRIMA. en virtud de lo anterior es procedente continuar el trámite de la personeria jurídica bajo dicha denominación, conforme a lo establecido en el Artículo 72 de la Ley de Procedimiento Administrativo y Artículo 8 del Reglamento de la Ley del Sector Social de la Economía. Dicha Constancia tendrá vigencia por un período de sesenta días a partir de la fecha.',
          {
            text: ['\n\nDado en la ciudad de Tegucigalpa M.D.C, 24/07/2024.'],
            marginTop: 15
          }
        ],
        marginTop: 20,
        lineHeight: 1,
        alignment: 'justify'
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 280,
            y2: 0,
            lineWidth: 0.8
          }
        ],
        alignment: 'center',
        marginTop: 130
      },
      {
        text: 'LIC. ROSA ANGELICA FAJARDO BONILLA\nSUBDIRECTORA DE FORMALIZACION',
        marginTop: 15,
        alignment: 'center'
      },
      {
        image: 'public/images/firma.png',
        width: 170,
        alignment: 'center',
        opacity: 0.9,
        absolutePosition: {
          x: 85, y: 475
        }
      },
      {
        stack: [
          {
            qr: 'https://devsse.senprende.hn/',
            fit: 97,
            alignment: 'center',
            marginTop: 68
          },
          {
            text: '*Escanea el documento para verificar su validez*',
            alignment: 'center',
            fontSize: 10,
            marginTop: 10
          }
        ]
      }
    ],
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