'use client';

import UserForm from '@/components/Forms/Users';
import styles from './page.module.css';
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from '@/redux/services/api';
import LoadingErrorStub from '@/components/LoadingErrorStub';
import { ICreateUpdateUserRequest } from '@/types/proto';

export default function EditAccountPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, isSuccess, isError, isLoading } = useGetUserByIdQuery(id);
  const [updateUser, result] = useUpdateUserMutation();

  const handleFinish = (values: ICreateUpdateUserRequest) => {
    updateUser({ id, updateRequestBody: values });
  };

  if (!isSuccess) {
    return <LoadingErrorStub isError={isError} isLoading={isLoading} />;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Редактирование аккаунта</h1>
      <UserForm
        type="edit"
        onFinish={handleFinish}
        result={result}
        user={data}
      />
    </div>
  );
}
