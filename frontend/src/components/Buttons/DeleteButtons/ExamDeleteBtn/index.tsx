'use client';

import React, { useEffect } from 'react';
import BaseDeleteButton from '../BaseDeleteButton';
import { useDeleteExamByIdMutation } from '@/redux/services/api';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

export default function ExamDeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const [deleteExam, result] = useDeleteExamByIdMutation();

  useEffect(() => {
    if (result.isSuccess) {
      message.success('Экзамен успешно удалён');
      router.push('/admin/tasks/exams');
    }

    if (result.isError) {
      message.error('Ошибка при удалении экзамена');
    }
  }, [result, router]);

  function onConfirm() {
    deleteExam(id);
  }

  return (
    <BaseDeleteButton
      title="Удалить экзамен?"
      description="Вы уверены, что хотите удалить экзамен?"
      isLoading={result.isLoading}
      onConfirm={onConfirm}
    />
  );
}
