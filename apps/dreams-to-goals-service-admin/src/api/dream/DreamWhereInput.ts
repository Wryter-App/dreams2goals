import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DreamWhereInput = {
  details?: StringNullableFilter;
  goals?: GoalListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
