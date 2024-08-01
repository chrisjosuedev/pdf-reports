import { Module } from '@nestjs/common';
import { DocumentFormatService } from './document-format.service';
import { DocumentFormatController } from './document-format.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentFormat } from "./entities/document-format.entity";

@Module({
  controllers: [DocumentFormatController],
  providers: [DocumentFormatService],
  imports: [TypeOrmModule.forFeature([DocumentFormat])],
  exports: [TypeOrmModule.forFeature([DocumentFormat])]
})
export class DocumentFormatModule {}
