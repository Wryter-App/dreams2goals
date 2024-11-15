import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  milestoneId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
