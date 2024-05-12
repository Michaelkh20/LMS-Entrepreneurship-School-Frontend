import type { Grade as GradeFinal } from '@/types/api';
import type { Grade as GradeProto } from '@/types/proto';

import SubmissionValidator from './Submission';
import TrackerGradeValidator from './TrackerGrade';

export default function validator(
  object: GradeProto | undefined
): object is GradeFinal {
  if (!object) {
    return false;
  }

  if (!object.gradeOwner) {
    return false;
  }

  if (!object.task) {
    return false;
  }

  if (
    object.submissionForGrading &&
    SubmissionValidator(object.submissionForGrading) === false
  ) {
    return false;
  }

  for (const trackerGrade of object.trackerGrades) {
    if (!TrackerGradeValidator(trackerGrade)) {
      return false;
    }
  }

  return true;
}
