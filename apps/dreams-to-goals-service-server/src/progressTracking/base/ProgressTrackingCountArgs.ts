/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProgressTrackingWhereInput } from "./ProgressTrackingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProgressTrackingCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProgressTrackingWhereInput,
  })
  @Field(() => ProgressTrackingWhereInput, { nullable: true })
  @Type(() => ProgressTrackingWhereInput)
  where?: ProgressTrackingWhereInput;
}

export { ProgressTrackingCountArgs as ProgressTrackingCountArgs };
