import type { Submission as SubmissionFinal } from '@/types/api';
import type { Submission as SubmissionProto } from '@/types/proto';

import HomeworkSnippetValidator from './HomeworkSnippet';

export default function validator(
  object: SubmissionProto | undefined
): object is SubmissionFinal {
  if (!object) {
    return false;
  }

  if (!HomeworkSnippetValidator(object.homework)) {
    return false;
  }

  if (!object.owner) {
    return false;
  }

  if (!object.publisher) {
    return false;
  }

  if (!object.publishedAt) {
    return false;
  }

  if (!object.payload) {
    return false;
  }

  return true;
}
