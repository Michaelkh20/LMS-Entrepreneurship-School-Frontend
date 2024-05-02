import dayjs from 'dayjs';
import { Role, Sex } from '@/types/common';

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
