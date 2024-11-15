import { Dream } from "../dream/Dream";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  dreams?: Array<Dream>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
