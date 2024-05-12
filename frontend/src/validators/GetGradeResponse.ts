import type { IGetGradeResponse as IGetGradeResponseFinal } from '@/types/api';
import type { IGetGradeResponse as IGetGradeResponseProto } from '@/types/proto';

import GradeValidator from './Grade';

export default function validator(
  object: IGetGradeResponseProto | undefined
): object is IGetGradeResponseFinal {
  if (!object) {
    return false;
  }

  if (!GradeValidator(object.grade)) {
    return false;
  }

  return true;
}
