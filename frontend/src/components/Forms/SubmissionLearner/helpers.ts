import { SubmissionFormValues } from '@/types/forms';
import { ICreateSubmissionRequest } from '@/types/proto';

export function formVlauesToRequest(
  values: SubmissionFormValues,
  hwId: string
): ICreateSubmissionRequest {
  return {
    homeworkId: hwId,
    payload: {
      attachmentUrls: values.files?.map((file) => file.name) || [],
      textAnswer: values.comment || '',
    },
    publishedAt: new Date(),
  };
}
