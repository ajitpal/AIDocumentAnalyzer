import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("AskOutputObject")
class AskOutput {
    @Field(() => [GraphQLJSON])
    analysisResults!: InputJsonValue;
}

export { AskOutput as AskOutput };