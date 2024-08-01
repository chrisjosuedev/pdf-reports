import { Controller } from '@nestjs/common';
import { DocumentFormatService } from './document-format.service';

@Controller('document-format')
export class DocumentFormatController {
  constructor(private readonly documentFormatService: DocumentFormatService) {}
}
