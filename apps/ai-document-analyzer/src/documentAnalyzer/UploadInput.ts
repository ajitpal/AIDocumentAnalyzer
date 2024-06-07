import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class UploadInput {
    @Field(() => GraphQLJSON)
    file!: InputJsonValue;
}

export { UploadInput as UploadInput };