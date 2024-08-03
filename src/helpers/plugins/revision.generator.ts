import { JSDOM } from 'jsdom';
import { RevisionType } from "src/common/RevisionType";

export const getRevisionContent = (htmlContent: string) => {
  const dom = new JSDOM(htmlContent.trim());
  const revisionPart = dom.window.document.querySelector('footer').innerHTML;

  if (new RegExp(RevisionType.REV_8, 'i').test(revisionPart)) {
    return RevisionType.REV_8;
  }
  return RevisionType.REV_10;
}