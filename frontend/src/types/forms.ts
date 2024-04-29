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
  login: string;
  newPassword: string;
  newPasswordDuplicate: string;
};
