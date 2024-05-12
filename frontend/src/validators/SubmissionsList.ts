import type { ISubmissionsList as ISubmissionsListFinal } from '@/types/api';
import type { ISubmissionsList as ISubmissionsListProto } from '@/types/proto';

import SubmissionValidator from './Submission';

export default function validator(
  object: ISubmissionsListProto | undefined
): object is ISubmissionsListFinal {
  if (!object) {
    return false;
  }

  for (const grade of object.submissions) {
    if (!SubmissionValidator(grade)) {
      return false;
    }
  }

  return true;
}
