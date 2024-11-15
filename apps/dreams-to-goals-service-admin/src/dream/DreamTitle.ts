import { Dream as TDream } from "../api/dream/Dream";

export const DREAM_TITLE_FIELD = "title";

export const DreamTitle = (record: TDream): string => {
  return record.title?.toString() || String(record.id);
};
