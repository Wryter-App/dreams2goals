import { DreamWhereUniqueInput } from "../dream/DreamWhereUniqueInput";
import { MilestoneUpdateManyWithoutGoalsInput } from "./MilestoneUpdateManyWithoutGoalsInput";

export type GoalUpdateInput = {
  details?: string | null;
  dream?: DreamWhereUniqueInput | null;
  milestones?: MilestoneUpdateManyWithoutGoalsInput;
  title?: string | null;
};
