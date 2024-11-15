import { Goal } from "../goal/Goal";
import { User } from "../user/User";

export type Dream = {
  createdAt: Date;
  details: string | null;
  goals?: Array<Goal>;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
