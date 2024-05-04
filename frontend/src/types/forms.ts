import dayjs from 'dayjs';
import { Role, Sex } from '@/types/common';
import { UploadFile } from 'antd';

export type UserFormValues = {
  firstName: string;
  surName: string;
  lastName?: string;
  email: string;
  phone?: string;
  messenger?: string;
  role: Role;
  sex: Sex;
};

export type SetPasswordFormValues = {
  newPassword: string;
  newPasswordDuplicate: string;
};

export type LessonFormValues = {
  lessonNumber: number;
  title: string;
  publishDate: dayjs.Dayjs;
  /** optional */
  description: string | undefined;
  videoUrls: string[] | undefined;
  presentationUrls: string[] | undefined;
};

export type HomeworkFormValues = {
  lessonId: string;
  deadlineDate: dayjs.Dayjs;
  isGroupWork: boolean;
  title: string;
  description: string;
  gradingCriteria: string;
};

export type TestFormValues = {
  lessonId: string;
  deadlineDate: dayjs.Dayjs;
  title: string;
  testUrl: string;
};

export type ExamCompetitionsFormValues = {
  deadlineDate: dayjs.Dayjs;
  title: string;
};

export type SubmissionFormValues = {
  comment: string;
  files: UploadFile[];
};
