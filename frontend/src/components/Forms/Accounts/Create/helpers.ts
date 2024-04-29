import { CreateAccountFormType } from '@/types/forms';
import { ICreateUpdateUserRequest } from '@/types/proto';

export function formValuesToRequest(
  values: CreateAccountFormType
): ICreateUpdateUserRequest {
  return {
    name: values.firstName,
    surname: values.surName,
    patronymic: values.lastName || '',
    email: values.email,
    phoneNumber: values.phone.replace(/\D/g, ''),
    messengerContact: values.messenger,
    role: values.role,
    sex: values.sex,
  };
}
