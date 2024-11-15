import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { TaskUpdateManyWithoutMilestonesInput } from "./TaskUpdateManyWithoutMilestonesInput";

export type MilestoneUpdateInput = {
  details?: string | null;
  goal?: GoalWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutMilestonesInput;
  title?: string | null;
};
