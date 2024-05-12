import type { ExamSnippet as ExamSnippetFinal } from '@/types/api';
import type { ExamSnippet as ExamSnippetProto } from '@/types/proto';

export default function validator(
  object: ExamSnippetProto | undefined
): object is ExamSnippetFinal {
  return Boolean(object && object.deadlineDate !== undefined);
}
