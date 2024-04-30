import { UserFormValues } from '@/types/forms';
import {
  ICreateUpdateUserRequest,
  IGetUserResponse,
  User,
} from '@/types/proto';

export function formValuesToRequest(
  values: UserFormValues
): ICreateUpdateUserRequest {
  return {
    name: values.firstName,
    surname: values.surName,
    patronymic: values.lastName || '',
    email: values.email,
    phoneNumber: values.phone?.replace(/\D/g, ''),
    messengerContact: values.messenger,
    role: values.role,
    sex: values.sex,
  };
}

export function getResponseToFormValues(
  response: IGetUserResponse
): UserFormValues {
  const user = response.user as User;

  return {
    firstName: user.name,
    surName: user.surname,
    lastName: user.patronymic,
    email: user.email,
    phone: user.phoneNumber,
    messenger: user.messengerContact,
    sex: user.sex,
    role: user.role,
  };
}
