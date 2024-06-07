import * as graphql from "@nestjs/graphql";
import { AskInput } from "../documentAnalyzer/AskInput";
import { AskOutput } from "../documentAnalyzer/AskOutput";
import { UploadInput } from "../documentAnalyzer/UploadInput";
import { UploadOutput } from "../documentAnalyzer/UploadOutput";
import { DocumentAnalyzerService } from "./documentanalyzer.service";

export class DocumentAnalyzerResolver {
  constructor(protected readonly service: DocumentAnalyzerService) {}

  @graphql.Mutation(() => AskOutput)
  async Ask(
    @graphql.Args()
    args: AskInput
  ): Promise<AskOutput> {
    return this.service.Ask(args);
  }

  @graphql.Mutation(() => UploadOutput)
  async Upload(
    @graphql.Args()
    args: UploadInput
  ): Promise<UploadOutput> {
    return this.service.Upload(args);
  }
}
