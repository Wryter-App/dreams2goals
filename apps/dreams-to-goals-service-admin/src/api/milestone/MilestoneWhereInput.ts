import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type MilestoneWhereInput = {
  details?: StringNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
  title?: StringNullableFilter;
};
