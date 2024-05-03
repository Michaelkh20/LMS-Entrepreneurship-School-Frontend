import { TestFormValues } from '@/types/forms';
import {
  ICreateUpdateTestRequest,
  IGetTestResponse,
  Test,
} from '@/types/proto';
import dayjs from 'dayjs';

export function formValuesToRequest(
  values: TestFormValues
): ICreateUpdateTestRequest {
  return {
    title: values.title,
    lessonId: values.lessonId,
    deadlineDate: values.deadlineDate.toDate(),
    externalMaterialUrls: [values.testUrl],
    description: '',
    gradingCriteria: '',
    publishDate: undefined,
  };
}

export function getResponseToFormValues(
  response: IGetTestResponse
): TestFormValues {
  const test = response.test as Test;

  return {
    title: test.title,
    lessonId: test.lesson?.id!,
    deadlineDate: dayjs(test.deadlineDate),
    testUrl: test.externalMaterialUrls[0],
  };
}
