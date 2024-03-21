'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteAccountByIdMutation } from '@/redux/services/adminApi';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function AccountDeleteBtn({ id }: { id: number }) {
  const router = useRouter();
  const [deleteAccount, result] = useDeleteAccountByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Аккаунт успешно удалён');
      router.push('/admin/accounts');
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
