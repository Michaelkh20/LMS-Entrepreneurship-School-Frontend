import type { CompetitionSnippet as CompetitionSnippetFinal } from '@/types/api';
import type { CompetitionSnippet as CompetitionSnippetProto } from '@/types/proto';

export default function validator(
  object: CompetitionSnippetProto | undefined
): object is CompetitionSnippetFinal {
  return Boolean(object && object.deadlineDate !== undefined);
}
