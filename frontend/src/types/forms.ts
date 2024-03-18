import { dto } from '@dto';
import Role = dto.Role;

export type EditAccountFormType = {
  firstName: string;
  surName: string;
  lastName?: string;
  email: string;
  phone: string;
  messenger: string;
  role: Role;
};

export type CreateAccountFormType = {
  firstName: string;
  surName: string;
  lastName?: string;
  email: string;
  phone: string;
  messenger: string;
  role: Role;
  password: string;
};
