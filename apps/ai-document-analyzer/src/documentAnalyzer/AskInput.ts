import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class AskInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    documentId!: string;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    questions!: string;
}

export { AskInput as AskInput };