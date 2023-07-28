import {
  AssessmentRequest,
  GetSolutionsTrackerApiArg,
  Id,
  TrackerSolutionInfo,
  TrackerSolutionsTable,
  TrackerTasksSolutionsTable,
} from '@/types/common';
import { learnerApi } from './learnerApi';

const trackerApi = learnerApi.injectEndpoints({
  endpoints: (build) => ({
    createAssessmentByTracker: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/tracker/assessments`,
        method: 'POST',
        body: assessmentRequest,
      }),
    }),

    updateAssessmentByTracker: build.mutation<undefined, AssessmentRequest>({
      query: (assessmentRequest) => ({
        url: `/tracker/assessments`,
        method: 'PUT',
        body: assessmentRequest,
      }),
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
    }),

    getSolutionsByTaskIdTracker: build.query<TrackerSolutionsTable, Id>({
      query: (taskId) => ({
        url: `/tracker/solutions`,
        params: { taskId: taskId },
      }),
    }),

    getSolutionInfoByIdTracker: build.query<TrackerSolutionInfo, Id>({
      query: (id) => ({ url: `/tracker/solutions/${id}` }),
    }),
  }),
  overrideExisting: false,
});

export { trackerApi as lmsApi };

export const {
  useCreateAssessmentByTrackerMutation,
  useUpdateAssessmentByTrackerMutation,
  useGetSolutionsTrackerQuery,
  useGetSolutionsByTaskIdTrackerQuery,
  useGetSolutionInfoByIdTrackerQuery,
} = trackerApi;
