import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentAnalyzerService } from "./documentanalyzer.service";
import { UploadInput } from "../documentAnalyzer/UploadInput";
import { AskOutput } from "../documentAnalyzer/AskOutput";
import { UploadOutput } from "../documentAnalyzer/UploadOutput";

@swagger.ApiTags("documentAnalyzers")
@common.Controller("documentAnalyzers")
export class DocumentAnalyzerController {
  constructor(protected readonly service: DocumentAnalyzerService) {}

  @common.Post("/ask")
  @swagger.ApiOkResponse({
    type: AskOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Ask(
    @common.Body()
    body: UploadInput
  ): Promise<AskOutput> {
        return this.service.Ask(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: UploadOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Upload(
    @common.Body()
    body: UploadInput
  ): Promise<UploadOutput> {
        return this.service.Upload(body);
      }
}
