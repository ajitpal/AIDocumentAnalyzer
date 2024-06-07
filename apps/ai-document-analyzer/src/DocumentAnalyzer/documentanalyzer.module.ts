import { Module } from "@nestjs/common";
import { DocumentAnalyzerService } from "./documentanalyzer.service";
import { DocumentAnalyzerController } from "./documentanalyzer.controller";
import { DocumentAnalyzerResolver } from "./documentanalyzer.resolver";

@Module({
  controllers: [DocumentAnalyzerController],
  providers: [DocumentAnalyzerService, DocumentAnalyzerResolver],
  exports: [DocumentAnalyzerService],
})
export class DocumentAnalyzerModule {}
