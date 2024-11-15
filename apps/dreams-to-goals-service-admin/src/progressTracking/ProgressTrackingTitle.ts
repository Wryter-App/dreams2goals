import { ProgressTracking as TProgressTracking } from "../api/progressTracking/ProgressTracking";

export const PROGRESSTRACKING_TITLE_FIELD = "id";

export const ProgressTrackingTitle = (record: TProgressTracking): string => {
  return record.id?.toString() || String(record.id);
};
