import { dto } from '@dto';
import IAccountCreateRequest = dto.IAccountCreateRequest;
import { CreateAccountFormType } from '@/types/forms';

export function formValuesToRequest(
  values: CreateAccountFormType
): IAccountCreateRequest {
  return {
    name: values.firstName,
    surname: values.surName,
    lastName: values.lastName || '',
    email: values.email,
    phone: values.phone.replace(/\D/g, ''),
    messenger: values.messenger,
    role: values.role,
    password: values.password,
  };
}
