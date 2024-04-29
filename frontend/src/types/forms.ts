import { Role, Sex } from '@/types/common';

export type EditAccountFormType = {
  firstName: string;
  surName: string;
  lastName?: string;
  email: string;
  phone: string;
  messenger: string;
  role: Role;
  sex: Sex;
};

export type CreateAccountFormType = {
  firstName: string;
  surName: string;
  lastName?: string;
  email: string;
  phone: string;
  messenger: string;
  role: Role;
  sex: Sex;
};
