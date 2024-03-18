import { learnerApi } from './learnerApi';

const trackerApi = learnerApi.injectEndpoints({
  endpoints: (build) => ({}),
  overrideExisting: false,
});

export const {} = trackerApi;
