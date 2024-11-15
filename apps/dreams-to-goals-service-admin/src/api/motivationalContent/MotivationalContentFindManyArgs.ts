import { MotivationalContentWhereInput } from "./MotivationalContentWhereInput";
import { MotivationalContentOrderByInput } from "./MotivationalContentOrderByInput";

export type MotivationalContentFindManyArgs = {
  where?: MotivationalContentWhereInput;
  orderBy?: Array<MotivationalContentOrderByInput>;
  skip?: number;
  take?: number;
};
