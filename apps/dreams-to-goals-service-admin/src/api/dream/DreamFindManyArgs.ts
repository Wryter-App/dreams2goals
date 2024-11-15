import { DreamWhereInput } from "./DreamWhereInput";
import { DreamOrderByInput } from "./DreamOrderByInput";

export type DreamFindManyArgs = {
  where?: DreamWhereInput;
  orderBy?: Array<DreamOrderByInput>;
  skip?: number;
  take?: number;
};
