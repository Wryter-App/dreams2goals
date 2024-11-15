import { Milestone } from "../milestone/Milestone";

export type Task = {
  createdAt: Date;
  details: string | null;
  id: string;
  milestone?: Milestone | null;
  title: string | null;
  updatedAt: Date;
};
