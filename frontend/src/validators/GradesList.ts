import type { IGradesList as IGradesListFinal } from '@/types/api';
import type { IGradesList as IGradesListProto } from '@/types/proto';

import GradeValidator from './Grade';

export default function validator(
  object: IGradesListProto | undefined
): object is IGradesListFinal {
  if (!object) {
    return false;
  }

  for (const grade of object.grades) {
    if (!GradeValidator(grade)) {
      return false;
    }
  }

  return true;
}
