import { Injectable } from "@nestjs/common";
import { AskInput } from "../documentAnalyzer/AskInput";
import { AskOutput } from "../documentAnalyzer/AskOutput";
import { UploadInput } from "../documentAnalyzer/UploadInput";
import { UploadOutput } from "../documentAnalyzer/UploadOutput";

@Injectable()
export class DocumentAnalyzerService {
  constructor() {}
  async Ask(args: AskInput): Promise<AskOutput> {
    throw new Error("Not implemented");
  }
  async Upload(args: UploadInput): Promise<UploadOutput> {
    throw new Error("Not implemented");
  }
}
