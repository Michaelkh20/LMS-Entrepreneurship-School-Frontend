import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { isArray } from 'util';

export function providesList<
  R extends { id: string | number }[],
  T extends string,
>(resultsWithIds: R | undefined, tagType: T) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export function errorHandler<R extends string | number, T extends string>(
  error: FetchBaseQueryError | undefined,
  tagType: T,
  id: R | R[]
) {
  if (!error) {
    return Array.isArray(id)
      ? id.map((id) => ({ type: tagType, id }))
      : [{ type: tagType, id }];
  } else {
    return [];
  }
}
