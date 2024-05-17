import {
  ExamCompetition,
  ICreateUpdateExamCompetitionRequest,
} from '@/types/api';
import { ExamCompetitionsFormValues } from '@/types/forms';
import dayjs from 'dayjs';

export function formValuesToRequest(
  values: ExamCompetitionsFormValues
): ICreateUpdateExamCompetitionRequest {
  return {
    title: values.title,
    deadlineDate: values.deadlineDate.toDate(),
    externalMaterialUrls: [],
    description: '',
    gradingCriteria: '',
    publishDate: undefined,
  };
}

export function getResponseToFormValues(
  examCompetition: ExamCompetition
): ExamCompetitionsFormValues {
  return {
    title: examCompetition.title,
    deadlineDate: dayjs(examCompetition.deadlineDate),
  };
}
