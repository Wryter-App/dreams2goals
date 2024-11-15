import { DreamWhereUniqueInput } from "../dream/DreamWhereUniqueInput";
import { MilestoneCreateNestedManyWithoutGoalsInput } from "./MilestoneCreateNestedManyWithoutGoalsInput";

export type GoalCreateInput = {
  details?: string | null;
  dream?: DreamWhereUniqueInput | null;
  milestones?: MilestoneCreateNestedManyWithoutGoalsInput;
  title?: string | null;
};
