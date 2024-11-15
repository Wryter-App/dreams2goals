import { MotivationalContent as TMotivationalContent } from "../api/motivationalContent/MotivationalContent";

export const MOTIVATIONALCONTENT_TITLE_FIELD = "id";

export const MotivationalContentTitle = (
  record: TMotivationalContent
): string => {
  return record.id?.toString() || String(record.id);
};
