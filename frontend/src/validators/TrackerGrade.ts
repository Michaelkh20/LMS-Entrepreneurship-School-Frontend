import type { TrackerGrade as TrackerGradeFinal } from '@/types/api';
import type { TrackerGrade as TrackerGradeProto } from '@/types/proto';

export default function validator(
  object: TrackerGradeProto | undefined
): object is TrackerGradeFinal {
  if (!object) {
    return false;
  }

  if (!object.tracker) {
    return false;
  }

  return true;
}
