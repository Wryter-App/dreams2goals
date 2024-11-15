import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskWhereInput = {
  details?: StringNullableFilter;
  id?: StringFilter;
  milestone?: MilestoneWhereUniqueInput;
  title?: StringNullableFilter;
};
