import type { IGetSubmissionResponse as IGetSubmissionResponseFinal } from '@/types/api';
import type { IGetSubmissionResponse as IGetSubmissionResponseProto } from '@/types/proto';

import SubmissionValidator from './Submission';

export default function validator(
  object: IGetSubmissionResponseProto | undefined
): object is IGetSubmissionResponseFinal {
  if (!object) {
    return false;
  }

  if (!SubmissionValidator(object.submission)) {
    return false;
  }

  return true;
}
