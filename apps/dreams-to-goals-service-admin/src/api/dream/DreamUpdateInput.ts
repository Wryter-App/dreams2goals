import { GoalUpdateManyWithoutDreamsInput } from "./GoalUpdateManyWithoutDreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DreamUpdateInput = {
  details?: string | null;
  goals?: GoalUpdateManyWithoutDreamsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
