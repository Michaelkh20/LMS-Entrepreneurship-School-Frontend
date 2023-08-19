import { Id } from '@/types/common';
import {
  AssessmentRequest,
  AssessmentUpdateRequest,
  GetSolutionsTrackerApiArg,
} from '@/types/requests';
import {
  TrackerSolutionInfo,
  TrackerSolutionsTable,
  TrackerTasksSolutionsTable,
} from '@/types/responses';
import { learnerApi } from './learnerApi';
import { errorHandler } from './helpers/tagHelpers';

const trackerApi = learnerApi.injectEndpoints({
  endpoints: (build) => ({
    createAssessmentByTracker: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/tracker/assessments`,
        method: 'POST',
        body: assessmentRequest,
      }),
      invalidatesTags: (result, error, assessmentRequest) =>
        errorHandler(error, 'Assessment', 'LIST'),
    }),

    updateAssessmentByTracker: build.mutation<
      undefined,
      { request: AssessmentUpdateRequest; taskId: Id }
    >({
      query: (assessmentRequest) => ({
        url: `/tracker/assessments`,
        method: 'PUT',
        body: assessmentRequest.request,
      }),
      invalidatesTags: (result, error, assessmentRequest) =>
        errorHandler(error, 'Assessment', [assessmentRequest.taskId, 'LIST']),
    }),

    getSolutionsTracker: build.query<
      TrackerTasksSolutionsTable,
      GetSolutionsTrackerApiArg
    >({
      query: (queryArg) => ({
        url: `/tracker/solutions/tasks`,
        params: {
          sortProperty: queryArg.sortProperty,
          sortOrder: queryArg.sortOrder,
        },
      }),
      providesTags: (result, error, assessmentRequest) =>
        errorHandler(error, 'Assessment', 'LIST'),
    }),

    getSolutionsByTaskIdTracker: build.query<TrackerSolutionsTable, Id>({
      query: (taskId) => ({
        url: `/tracker/solutions`,
        params: { taskId: taskId },
      }),
      providesTags: (result, error, taskId) =>
        errorHandler(error, 'Assessment', taskId),
    }),

    getSolutionInfoByIdTracker: build.query<TrackerSolutionInfo, Id>({
      query: (id) => ({ url: `/tracker/solutions/${id}` }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAssessmentByTrackerMutation,
  useUpdateAssessmentByTrackerMutation,
  useGetSolutionsTrackerQuery,
  useGetSolutionsByTaskIdTrackerQuery,
  useGetSolutionInfoByIdTrackerQuery,
} = trackerApi;
