'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteHwByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function HomeworkDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteHomework, result] = useDeleteHwByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('ДЗ успешно удалено');
      router.push('/admin/tests');
    }

    if (result.isError) {
      message.error('Ошибка при удалении ДЗ');
    }
  }, [result, router]);

  function onConfirm() {
    deleteHomework(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить ДЗ?"
      description="Вы уверены, что хотите удалить ДЗ?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}
