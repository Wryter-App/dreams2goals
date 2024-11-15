import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { TaskCreateNestedManyWithoutMilestonesInput } from "./TaskCreateNestedManyWithoutMilestonesInput";

export type MilestoneCreateInput = {
  details?: string | null;
  goal?: GoalWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutMilestonesInput;
  title?: string | null;
};
