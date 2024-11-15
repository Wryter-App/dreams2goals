import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskUpdateInput = {
  details?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  title?: string | null;
};
