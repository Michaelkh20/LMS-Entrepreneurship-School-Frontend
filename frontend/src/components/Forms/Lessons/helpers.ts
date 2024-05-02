import dayjs from 'dayjs';
import { LessonFormValues } from '@/types/forms';
import {
  ICreateUpdateLessonRequest,
  IGetLessonResponse,
  Lesson,
} from '@/types/proto';

export function formValuesToRequest(
  values: LessonFormValues
): ICreateUpdateLessonRequest {
  return {
    lessonNumber: values.lessonNumber,
    title: values.title,
    description: values.description,
    publishDate: values.publishDate.toDate(),
    videoUrls: values.videoUrls || [],
    presentationUrls: values.presentationUrls || [],
  };
}

export function getResponseToFormValues(
  response: IGetLessonResponse
): LessonFormValues {
  const lesson = response.lesson as Lesson;

  return {
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    description: lesson.description,
    publishDate: dayjs(lesson.publishDate),
    videoUrls: lesson.videoUrls,
    presentationUrls: lesson.presentationUrls,
  };
}
