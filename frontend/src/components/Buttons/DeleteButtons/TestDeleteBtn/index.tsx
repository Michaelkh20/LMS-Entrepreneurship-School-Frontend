'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteTestByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { BaseButtonProps } from 'antd/es/button/button';

export default function TestDeleteBtn({
  id,
  size,
}: {
  id: string;
  size: BaseButtonProps['size'];
}) {
  const router = useRouter();
  const [deleteTest, result] = useDeleteTestByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Тест успешно удалён');
      router.push('/admin/tasks/tests');
    }

    if (result.isError) {
      message.error('Ошибка при удалении теста');
    }
  }, [result, router]);

  function onConfirm() {
    deleteTest(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить тест?"
      description="Вы уверены, что хотите удалить тест?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
      size={size}
    />
  );
}
