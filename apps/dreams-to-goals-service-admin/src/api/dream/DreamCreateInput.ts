import { GoalCreateNestedManyWithoutDreamsInput } from "./GoalCreateNestedManyWithoutDreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DreamCreateInput = {
  details?: string | null;
  goals?: GoalCreateNestedManyWithoutDreamsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
