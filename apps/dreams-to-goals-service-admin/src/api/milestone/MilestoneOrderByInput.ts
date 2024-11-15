import { SortOrder } from "../../util/SortOrder";

export type MilestoneOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
