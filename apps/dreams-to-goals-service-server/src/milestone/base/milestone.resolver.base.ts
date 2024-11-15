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
import { Milestone } from "./Milestone";
import { MilestoneCountArgs } from "./MilestoneCountArgs";
import { MilestoneFindManyArgs } from "./MilestoneFindManyArgs";
import { MilestoneFindUniqueArgs } from "./MilestoneFindUniqueArgs";
import { CreateMilestoneArgs } from "./CreateMilestoneArgs";
import { UpdateMilestoneArgs } from "./UpdateMilestoneArgs";
import { DeleteMilestoneArgs } from "./DeleteMilestoneArgs";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { Goal } from "../../goal/base/Goal";
import { MilestoneService } from "../milestone.service";
@graphql.Resolver(() => Milestone)
export class MilestoneResolverBase {
  constructor(protected readonly service: MilestoneService) {}

  async _milestonesMeta(
    @graphql.Args() args: MilestoneCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Milestone])
  async milestones(
    @graphql.Args() args: MilestoneFindManyArgs
  ): Promise<Milestone[]> {
    return this.service.milestones(args);
  }

  @graphql.Query(() => Milestone, { nullable: true })
  async milestone(
    @graphql.Args() args: MilestoneFindUniqueArgs
  ): Promise<Milestone | null> {
    const result = await this.service.milestone(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Milestone)
  async createMilestone(
    @graphql.Args() args: CreateMilestoneArgs
  ): Promise<Milestone> {
    return await this.service.createMilestone({
      ...args,
      data: {
        ...args.data,

        goal: args.data.goal
          ? {
              connect: args.data.goal,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Milestone)
  async updateMilestone(
    @graphql.Args() args: UpdateMilestoneArgs
  ): Promise<Milestone | null> {
    try {
      return await this.service.updateMilestone({
        ...args,
        data: {
          ...args.data,

          goal: args.data.goal
            ? {
                connect: args.data.goal,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Milestone)
  async deleteMilestone(
    @graphql.Args() args: DeleteMilestoneArgs
  ): Promise<Milestone | null> {
    try {
      return await this.service.deleteMilestone(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Task], { name: "tasks" })
  async findTasks(
    @graphql.Parent() parent: Milestone,
    @graphql.Args() args: TaskFindManyArgs
  ): Promise<Task[]> {
    const results = await this.service.findTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Goal, {
    nullable: true,
    name: "goal",
  })
  async getGoal(@graphql.Parent() parent: Milestone): Promise<Goal | null> {
    const result = await this.service.getGoal(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
