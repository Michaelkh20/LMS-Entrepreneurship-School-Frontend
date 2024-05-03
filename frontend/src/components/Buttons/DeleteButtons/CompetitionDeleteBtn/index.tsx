'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteCompetitionByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function CompetitionDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteCompetition, result] = useDeleteCompetitionByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Конкурс успешно удалён');
      router.push('/admin/tasks/tests');
    }

    if (result.isError) {
      message.error('Ошибка при удалении конкурса');
    }
  }, [result, router]);

  function onConfirm() {
    deleteCompetition(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить конкурс?"
      description="Вы уверены, что хотите удалить конкурс?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}
