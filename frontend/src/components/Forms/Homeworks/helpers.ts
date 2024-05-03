import dayjs from 'dayjs';
import { HomeworkFormValues } from '@/types/forms';
import {
  Homework,
  ICreateUpdateHomeworkRequest,
  IGetHomeworkResponse,
} from '@/types/proto';

export function formValuesToRequest(
  values: HomeworkFormValues
): ICreateUpdateHomeworkRequest {
  return {
    title: values.title,
    lessonId: values.lessonId,
    deadlineDate: values.deadlineDate.toDate(),
    description: values.description,
    gradingCriteria: values.gradingCriteria,
    isGroupWork: values.isGroupWork,
    externalMaterialUrls: [],
    publishDate: undefined,
  };
}

export function getResponseToFormValues(
  response: IGetHomeworkResponse
): HomeworkFormValues {
  const homework = response.homework as Homework;

  return {
    title: homework.title,
    lessonId: homework.lesson?.id!,
    description: homework.description,
    deadlineDate: dayjs(homework.deadlineDate),
    gradingCriteria: homework.gradingCriteria,
    isGroupWork: homework.isGroupWork,
  };
}
