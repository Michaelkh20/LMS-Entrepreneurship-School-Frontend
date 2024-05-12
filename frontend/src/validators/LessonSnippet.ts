import type { LessonSnippet as LessonSnippetFinal } from '@/types/api';
import type { LessonSnippet as LessonSnippetProto } from '@/types/proto';

export default function validator(
  object: LessonSnippetProto | undefined
): object is LessonSnippetFinal {
  return Boolean(object && object.publishDate !== undefined);
}
