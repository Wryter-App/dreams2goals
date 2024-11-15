import { SortOrder } from "../../util/SortOrder";

export type DreamOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
