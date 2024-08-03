import { Injectable } from '@nestjs/common';
import { denominationReport } from "../templates/documents/denomination.report";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { reportRevision_10 } from "../templates/revisions/rev-10.report";
import { RevisionType } from "src/common/RevisionType";
import { reportRevision_08 } from "../templates/revisions/rev-08.report";

@Injectable()
export class GenerateDocumentService {

  // Generate Denomination Report | Revision 10 by Default
  generateDenominationReport = (): TDocumentDefinitions => {
    // Get Denomination Template
    const docDenominationContent = denominationReport();

    // Rerturning Report Denomination with Revision 10
    return reportRevision_10(docDenominationContent)
  }

  // Generate Report from HTML 
  generateReportFromHtml = (content: Content, revisionType: RevisionType): TDocumentDefinitions => {
    // code
    return revisionType === RevisionType.REV_8 ? reportRevision_08(content) : reportRevision_10(content)
  }
}
