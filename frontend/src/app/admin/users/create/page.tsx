'use client';

import { useCreateUserMutation } from '@/redux/services/api';
import styles from './page.module.css';
import UserForm from '@/components/Forms/Users';
import { ICreateUpdateUserRequest } from '@/types/proto';

export default function CreateUserPage() {
  const [createUser, result] = useCreateUserMutation();

  const handleFinish = (values: ICreateUpdateUserRequest) => {
    createUser(values);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Создать аккаунт</h1>
      <UserForm type="create" onFinish={handleFinish} result={result} />
    </div>
  );
}
