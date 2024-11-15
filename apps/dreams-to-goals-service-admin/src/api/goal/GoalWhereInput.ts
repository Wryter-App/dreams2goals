import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DreamWhereUniqueInput } from "../dream/DreamWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneListRelationFilter } from "../milestone/MilestoneListRelationFilter";

export type GoalWhereInput = {
  details?: StringNullableFilter;
  dream?: DreamWhereUniqueInput;
  id?: StringFilter;
  milestones?: MilestoneListRelationFilter;
  title?: StringNullableFilter;
};
