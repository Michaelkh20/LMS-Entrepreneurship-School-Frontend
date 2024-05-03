'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteUserByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function AccountDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteAccount, result] = useDeleteUserByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Аккаунт успешно удалён');
      router.push('/admin/users');
    }

    if (result.isError) {
      message.error('Ошибка при удалении аккаунта');
    }
  }, [result, router]);

  function onConfirm() {
    deleteAccount(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить аккаунт?"
      description="Вы уверены, что хотите удалить аккаунт?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}
