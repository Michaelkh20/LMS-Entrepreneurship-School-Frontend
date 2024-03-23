import { dto } from '@dto';
import IAccountEditRequest = dto.IAccountEditRequest;
import AccountGetResponse = dto.AccountGetResponse;
import { EditAccountFormType } from '@/types/forms';

export function formValuesToRequest(
  values: EditAccountFormType
): IAccountEditRequest {
  return {
    name: values.firstName,
    surname: values.surName,
    lastName: values.lastName || '',
    email: values.email,
    phone: values.phone.replace(/\D/g, ''),
    messenger: values.messenger,
  };
}

export function fromResponseToFormValues(
  data: AccountGetResponse
): EditAccountFormType {
  return {
    firstName: data.name,
    surName: data.surname,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    messenger: data.messenger,
    role: data.role,
  };
}