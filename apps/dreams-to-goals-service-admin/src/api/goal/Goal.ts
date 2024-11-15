import { Dream } from "../dream/Dream";
import { Milestone } from "../milestone/Milestone";

export type Goal = {
  createdAt: Date;
  details: string | null;
  dream?: Dream | null;
  id: string;
  milestones?: Array<Milestone>;
  title: string | null;
  updatedAt: Date;
};
