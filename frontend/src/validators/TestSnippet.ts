import type { TestSnippet as TestSnippetFinal } from '@/types/api';
import type { TestSnippet as TestSnippetProto } from '@/types/proto';

import LessonSnippetValidator from './LessonSnippet';

export default function validator(
  object: TestSnippetProto | undefined
): object is TestSnippetFinal {
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
