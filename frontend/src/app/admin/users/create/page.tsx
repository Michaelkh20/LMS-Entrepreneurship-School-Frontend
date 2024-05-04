'use client';

import { useCreateUserMutation } from '@/redux/services/api';
import UserForm from '@/components/Forms/Users';
import { ICreateUpdateUserRequest } from '@/types/proto';
import { BasePageLayout } from '@/components/Layouts/BasePageLayout/BasePageLayout';

export default function CreateUserPage() {
  const [createUser, result] = useCreateUserMutation();

  const handleFinish = (values: ICreateUpdateUserRequest) => {
    createUser(values);
  };

  return (
    <BasePageLayout header={<h2>Создать аккаунт</h2>}>
      <UserForm type="create" onFinish={handleFinish} result={result} />
    </BasePageLayout>
  );
}
