import type { HomeworkSnippet as HomeworkSnippetFinal } from '@/types/api';
import type { HomeworkSnippet as HomeworkSnippetProto } from '@/types/proto';

import LessonSnippetValidator from './LessonSnippet';

export default function validator(
  object: HomeworkSnippetProto | undefined
): object is HomeworkSnippetFinal {
  if (!object) {
    return false;
  }

  if (!LessonSnippetValidator(object.lesson)) {
    return false;
  }

  if (!object.deadlineDate) {
    return false;
  }

  return true;
}
