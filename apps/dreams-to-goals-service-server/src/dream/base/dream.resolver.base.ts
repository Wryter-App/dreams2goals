/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Dream } from "./Dream";
import { DreamCountArgs } from "./DreamCountArgs";
import { DreamFindManyArgs } from "./DreamFindManyArgs";
import { DreamFindUniqueArgs } from "./DreamFindUniqueArgs";
import { DeleteDreamArgs } from "./DeleteDreamArgs";
import { DreamService } from "../dream.service";
@graphql.Resolver(() => Dream)
export class DreamResolverBase {
  constructor(protected readonly service: DreamService) {}

  async _dreamsMeta(
    @graphql.Args() args: DreamCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dream])
  async dreams(@graphql.Args() args: DreamFindManyArgs): Promise<Dream[]> {
    return this.service.dreams(args);
  }

  @graphql.Query(() => Dream, { nullable: true })
  async dream(
    @graphql.Args() args: DreamFindUniqueArgs
  ): Promise<Dream | null> {
    const result = await this.service.dream(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dream)
  async deleteDream(
    @graphql.Args() args: DeleteDreamArgs
  ): Promise<Dream | null> {
    try {
      return await this.service.deleteDream(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
