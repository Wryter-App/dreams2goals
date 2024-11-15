import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskCreateInput = {
  details?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  title?: string | null;
};
