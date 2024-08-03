import { Content } from "pdfmake/interfaces"

export const denominationReport = (): Content => {
  return [
    {
      text: 'SERVICIO NACIONAL DE EMPRENDIMIENTO Y DE PEQUEÑOS NEGOCIOS',
      bold: true,
      fontSize: 14,
      alignment: 'center',
      margin: [0, 30, 0, 26]
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
  ]
}