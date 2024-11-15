import { Dream as TDream } from "../api/dream/Dream";

export const DREAM_TITLE_FIELD = "id";

export const DreamTitle = (record: TDream): string => {
  return record.id?.toString() || String(record.id);
};
