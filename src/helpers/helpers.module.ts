import { Module } from '@nestjs/common';
import { GenerateDocumentService } from './services/generate-document.service';

@Module({
  providers: [GenerateDocumentService],
  exports: [GenerateDocumentService]
})
export class HelpersModule {}
