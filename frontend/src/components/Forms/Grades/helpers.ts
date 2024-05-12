import { UpdateGradeApiArg } from '@/types/api';
import { GradeFormValues } from '@/types/forms';

export function formVlauesToRequest(
  values: GradeFormValues,
  gradeId: string
): UpdateGradeApiArg {
  return {
    id: gradeId,
    updateRequestBody: {
      comment: values.comment,
      grade: values.grade,
    },
  };
}
